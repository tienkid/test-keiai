import React, { memo, useState } from 'react';

import isEqual from 'react-fast-compare';

import {
  dispatch,
  NON_REFRESH,
  numberToCountryCode,
  TIME_REFRESH,
} from '@common';
import { Block, Spacer, WrapperBackground } from '@components';
import {
  handleHideModalLoading,
  handleShowModalLoading,
} from '@components/modal-loading';
import { useSelector } from '@hooks';
import { FormLoginType } from '@model/authentication';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { appActions } from '@redux-slice';
import { I18nKeys } from '@utils/i18n/locales';
import { loadString, saveString } from '@utils/storage';
import { Auth } from 'aws-amplify';
import moment from 'moment';

import { FormLogin } from './components/form-login';

const LoginComponent = () => {
  const refreshToken = useSelector(x => x.app.refreshToken);
  const checkRefresh = loadString(NON_REFRESH);
  const [errorLogin, setErrorLogin] = useState<I18nKeys | undefined>();
  console.log(checkRefresh, 'checkRefresh');

  const today = moment(new Date()).format('YYYY-MM-DD');
  // function
  const onSubmit = async (data: FormLoginType) => {
    setErrorLogin(undefined);
    handleShowModalLoading();
    const phoneNumber = numberToCountryCode(data.phoneNumber);
    try {
      const res = await Auth.signIn(phoneNumber, data.password);
      dispatch(
        appActions.setAppProfile({
          ...res.attributes,
          username: res.username,
        }),
      );
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
        // dispatch(
        //   appActions.setAppProfile({
        //     ...res.attributes,
        //     username: res.username,
        //   }),
        // );
      } else {
        const expired = moment(checkRefresh).format('YYYY-MM-DD');
        const diff = moment.duration(moment(expired).diff(moment(today)));
        const days = diff.days();
        console.log(days, 'days');
        if (days <= 0) {
          // dispatch(appActions.setPhoneReLogin(phoneNumber));
          navigate(APP_SCREEN.REGISTER, {
            type: 'reLogin',
            phone: phoneNumber,
          });
        } else {
          dispatch(
            appActions.setToken({
              token: res.signInUserSession.accessToken.jwtToken,
              refreshToken: refreshToken ?? '',
            }),
          );
          // dispatch(
          //   appActions.setAppProfile({
          //     ...res.attributes,
          //     username: res.username,
          //   }),
          // );
        }
      }
    } catch (error) {
      setErrorLogin('login:error_login');
    }
    handleHideModalLoading();
  };

  // render
  return (
    <Block block colorTheme="white">
      <WrapperBackground canBack headerTitleT18n="login:login_title">
        <Spacer height={20} />
        <FormLogin onSubmit={onSubmit} errorLogin={errorLogin} />
      </WrapperBackground>
    </Block>
  );
};
export const Login = memo(LoginComponent, isEqual);
