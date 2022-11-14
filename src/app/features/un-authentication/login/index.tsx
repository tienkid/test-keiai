import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch, NON_REFRESH, TIME_REFRESH } from '@common';
import { Block, Trouble, WrapperBackground } from '@components';
import {
  handleHideModalLoading,
  handleShowModalLoading,
} from '@components/modal-loading';
import { useSelector } from '@hooks';
import { FormLoginType } from '@model/authentication';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { appActions } from '@redux-slice';
import { loadString, saveString } from '@utils/storage';
import { Auth } from 'aws-amplify';
import moment from 'moment';

import { FormLogin } from './components/form-login';

const LoginComponent = () => {
  const refreshToken = useSelector(x => x.app.refreshToken);
  const checkRefresh = loadString(NON_REFRESH);
  const today = moment(new Date()).format('YYYY-MM-DD');
  // function
  const onSubmit = async (data: FormLoginType) => {
    handleShowModalLoading();
    try {
      const res = await Auth.signIn(data.phoneNumber, data.password);
      if (!checkRefresh) {
        const timeExpiredRefreshToken = moment(today)
          .add(TIME_REFRESH, 'd')
          .format('YYYY-MM-DD');
        saveString(NON_REFRESH, timeExpiredRefreshToken);
        dispatch(
          appActions.setToken({
            token: res.signInUserSession.accessToken.jwtToken,
            refreshToken: refreshToken ?? '',
          }),
        );
        dispatch(appActions.setAppProfile(res.attributes));
      } else {
        const expired = moment(checkRefresh).format('YYYY-MM-DD');
        const diff = moment.duration(moment(expired).diff(moment(today)));
        const days = diff.days();
        if (days === 0) {
          navigate(APP_SCREEN.REGISTER);
        } else {
          dispatch(
            appActions.setToken({
              token: res.signInUserSession.accessToken.jwtToken,
              refreshToken: refreshToken ?? '',
            }),
          );
          dispatch(appActions.setAppProfile(res.attributes));
        }
      }
    } catch (error) {
      console.log(error);
    }
    handleHideModalLoading();
  };

  // render
  return (
    <Block block colorTheme="white">
      <WrapperBackground titleT18n="login:title">
        <FormLogin onSubmit={onSubmit} />
      </WrapperBackground>
      <Trouble />
    </Block>
  );
};
export const Login = memo(LoginComponent, isEqual);
