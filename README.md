# NativeScript CallBlock

[![Build Status](https://travis-ci.org/SalehMahmood/nativescript-callblock.svg?branch=master)](https://travis-ci.org/SalehMahmood/nativescript-callblock)
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![TotalDownloads][total-downloads-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[npm-image]:http://img.shields.io/npm/v/nativescript-callblock.svg
[npm-url]:https://npmjs.org/package/nativescript-callblock
[downloads-image]:http://img.shields.io/npm/dm/nativescript-callblock.svg
[total-downloads-image]:http://img.shields.io/npm/dt/nativescript-callblock.svg?label=total%20downloads
[twitter-image]:https://img.shields.io/twitter/follow/thesalehmahmood.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/thesalehmahmood

Allows you to block calls in nativescript on android platform only.

**Note:**  This documentation is not completed and will definitely update in future

#### Supported Plaforms:

- Android

#### Installation

Install the package via tns/npm/Yarn

**Via NPM**
`tns plugin add nativescript-callblock`

**Via NPM:**
`npm install nativescript-callblock --save`

**Via Yarn:**
`yarn add nativescript-callblock`

#### Usage: Android

##### JavaScript:
Create a `CallBlocker.js` file in the `app` folder of your project. Paste the following

    const TelephonyManager = android.telephony.TelephonyManager;
    const CallBlock = require('nativescript-callblock').CallBlock;

    const NSCB = new CallBlock();

    android.content.BroadcastReceiver.extend("com.tns.broadcastreceivers.CallBlocker", 
        {
            onReceive: function(context, intent) {
                var action = intent.getAction();
                number = intent.getExtras().getString(TelephonyManager.EXTRA_INCOMING_NUMBER);
                
                console.log("incoming from", number);

                // Whatever you want.
                let blocked = "00000000";
                
                if(number === blocked) {
                    NSCB.blockCall(context, intent);
                }

            }
        }
    );

After that add reciever at the end of `<application>` tag in `AndroidManifest.xml`.

    <application ... />
        ...
		<receiver
			android:name="com.tns.broadcastreceivers.CallBlocker"
			android:enabled="true"
			android:exported="true">
			<intent-filter>
				<action android:name="android.intent.action.PHONE_STATE" />
				<action android:name="android.intent.action.NEW_OUTGOING_CALL" />
			</intent-filter>
		</receiver>
    </appliction>

You're good to go.
