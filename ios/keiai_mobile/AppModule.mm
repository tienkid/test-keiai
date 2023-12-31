//
//  AppModule.m
//  keiai_mobile
//


#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(AppModule, RCTEventEmitter)
RCT_EXTERN__BLOCKING_SYNCHRONOUS_METHOD(getVersion)
RCT_EXTERN__BLOCKING_SYNCHRONOUS_METHOD(getBuildNumber)
RCT_EXTERN__BLOCKING_SYNCHRONOUS_METHOD(getAppName)
RCT_EXTERN__BLOCKING_SYNCHRONOUS_METHOD(getDeviceId)
RCT_EXTERN_METHOD(registerPhotosChanges)
RCT_EXTERN_METHOD(clearCache)
RCT_EXTERN_METHOD(setIQKeyboardOption:(NSDictionary*) options)
RCT_EXTERN_METHOD(clearNotification)
RCT_EXTERN_METHOD(setBadges: (double)count)
RCT_EXTERN_METHOD(fixRotation: (NSString * )path width: (double) width height: (double) height callback: (RCTResponseSenderBlock) callback)
@end

