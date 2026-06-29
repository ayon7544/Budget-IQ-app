This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: node_modules, dist, coverage, .git, uploads, logs, *.log, *.png, *.jpg, *.jpeg, *.svg, *.pdf
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.easignore
.gitignore
android/.gitignore
android/app/build.gradle
android/app/debug.keystore
android/app/proguard-rules.pro
android/app/src/debug/AndroidManifest.xml
android/app/src/debugOptimized/AndroidManifest.xml
android/app/src/main/AndroidManifest.xml
android/app/src/main/java/com/budgetiq/android/MainActivity.kt
android/app/src/main/java/com/budgetiq/android/MainApplication.kt
android/app/src/main/res/drawable-hdpi/splashscreen_logo.png
android/app/src/main/res/drawable-mdpi/splashscreen_logo.png
android/app/src/main/res/drawable-xhdpi/splashscreen_logo.png
android/app/src/main/res/drawable-xxhdpi/splashscreen_logo.png
android/app/src/main/res/drawable-xxxhdpi/splashscreen_logo.png
android/app/src/main/res/drawable/ic_launcher_background.xml
android/app/src/main/res/drawable/rn_edit_text_material.xml
android/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml
android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml
android/app/src/main/res/mipmap-hdpi/ic_launcher_foreground.webp
android/app/src/main/res/mipmap-hdpi/ic_launcher_round.webp
android/app/src/main/res/mipmap-hdpi/ic_launcher.webp
android/app/src/main/res/mipmap-mdpi/ic_launcher_foreground.webp
android/app/src/main/res/mipmap-mdpi/ic_launcher_round.webp
android/app/src/main/res/mipmap-mdpi/ic_launcher.webp
android/app/src/main/res/mipmap-xhdpi/ic_launcher_foreground.webp
android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.webp
android/app/src/main/res/mipmap-xhdpi/ic_launcher.webp
android/app/src/main/res/mipmap-xxhdpi/ic_launcher_foreground.webp
android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.webp
android/app/src/main/res/mipmap-xxhdpi/ic_launcher.webp
android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.webp
android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp
android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.webp
android/app/src/main/res/values-night/colors.xml
android/app/src/main/res/values/colors.xml
android/app/src/main/res/values/strings.xml
android/app/src/main/res/values/styles.xml
android/build.gradle
android/gradle.properties
android/gradle/wrapper/gradle-wrapper.jar
android/gradle/wrapper/gradle-wrapper.properties
android/gradlew
android/gradlew.bat
android/settings.gradle
app.json
app/_layout.jsx
app/(tabs)/_layout.jsx
app/(tabs)/DashboardScreen.jsx
app/(tabs)/index.jsx
app/(tabs)/SettingScreen.jsx
app/AccountInformation.jsx
app/AccountVerification.jsx
app/Currency.jsx
app/ExpenseCategories.jsx
app/ForgerPassword.jsx
app/IncomeCategories.jsx
app/IncrementDecrementAmount.jsx
app/index.jsx
app/InitialScreen.jsx
app/LoginScreen.jsx
app/NewPassword.jsx
app/Otp.jsx
app/PrivacyPolicy.jsx
app/ReviewTheApp.jsx
app/SecondScreen.jsx
app/SignUpScreen.jsx
app/SplashScreen.jsx
app/Subscriptions.jsx
app/TermsAndPolicies.jsx
assets/fonts/SpaceMono-Regular.ttf
assets/images/apple.png
assets/images/aus.png
assets/images/avater.png
assets/images/backicon.png
assets/images/ban.png
assets/images/budget.png
assets/images/eng.png
assets/images/eu.png
assets/images/google.png
assets/images/iq.png
assets/images/new.svg
assets/images/partial-react-logo.png
assets/images/react-logo.png
assets/images/react-logo@2x.png
assets/images/react-logo@3x.png
assets/images/sou.png
assets/images/splashscreen_logo.png
assets/images/trust.png
assets/images/us.png
assets/images/welcome.png
assets/lib/tailwind.jsx
components/Charts/ExpenseIncome.jsx
components/Charts/TotalSpentDonutChart.jsx
components/CostEarnList.jsx
components/RemoteSvg.js
components/UI/BackButton.jsx
components/UI/Button.jsx
Constants/Colors.js
eas.json
index.js
metro.config.js
package.json
README.md
redux/services/api.js
redux/slices/authSlice.js
redux/slices/messageSlice.js
redux/slices/SubscriptionSlice.js
redux/slices/userSlice.js
redux/store.js
tsconfig.json
utils/secureStore.js
```

# Files

## File: .easignore
````
android/build/
android/.gradle/
node_modules/
.git/
.expo/
dist/
````

## File: android/app/src/main/java/com/budgetiq/android/MainActivity.kt
````kotlin
package com.budgetiq.android
import expo.modules.splashscreen.SplashScreenManager

import android.os.Build
import android.os.Bundle

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

import expo.modules.ReactActivityDelegateWrapper

class MainActivity : ReactActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    // Set the theme to AppTheme BEFORE onCreate to support
    // coloring the background, status bar, and navigation bar.
    // This is required for expo-splash-screen.
    // setTheme(R.style.AppTheme);
    // @generated begin expo-splashscreen - expo prebuild (DO NOT MODIFY) sync-f3ff59a738c56c9a6119210cb55f0b613eb8b6af
    SplashScreenManager.registerOnActivity(this)
    // @generated end expo-splashscreen
    super.onCreate(null)
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "main"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate {
    return ReactActivityDelegateWrapper(
          this,
          BuildConfig.IS_NEW_ARCHITECTURE_ENABLED,
          object : DefaultReactActivityDelegate(
              this,
              mainComponentName,
              fabricEnabled
          ){})
  }

  /**
    * Align the back button behavior with Android S
    * where moving root activities to background instead of finishing activities.
    * @see <a href="https://developer.android.com/reference/android/app/Activity#onBackPressed()">onBackPressed</a>
    */
  override fun invokeDefaultOnBackPressed() {
      if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
          if (!moveTaskToBack(false)) {
              // For non-root activities, use the default implementation to finish them.
              super.invokeDefaultOnBackPressed()
          }
          return
      }

      // Use the default back button implementation on Android S
      // because it's doing more than [Activity.moveTaskToBack] in fact.
      super.invokeDefaultOnBackPressed()
  }
}
````

## File: android/app/src/main/java/com/budgetiq/android/MainApplication.kt
````kotlin
package com.budgetiq.android

import android.app.Application
import android.content.res.Configuration

import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.ReactHost
import com.facebook.react.common.ReleaseLevel
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint
import com.facebook.react.defaults.DefaultReactNativeHost

import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ReactNativeHostWrapper

class MainApplication : Application(), ReactApplication {

  override val reactNativeHost: ReactNativeHost = ReactNativeHostWrapper(
      this,
      object : DefaultReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> =
            PackageList(this).packages.apply {
              // Packages that cannot be autolinked yet can be added manually here, for example:
              // add(MyReactNativePackage())
            }

          override fun getJSMainModuleName(): String = ".expo/.virtual-metro-entry"

          override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

          override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
      }
  )

  override val reactHost: ReactHost
    get() = ReactNativeHostWrapper.createReactHost(applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()
    DefaultNewArchitectureEntryPoint.releaseLevel = try {
      ReleaseLevel.valueOf(BuildConfig.REACT_NATIVE_RELEASE_LEVEL.uppercase())
    } catch (e: IllegalArgumentException) {
      ReleaseLevel.STABLE
    }
    loadReactNative(this)
    ApplicationLifecycleDispatcher.onApplicationCreate(this)
  }

  override fun onConfigurationChanged(newConfig: Configuration) {
    super.onConfigurationChanged(newConfig)
    ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)
  }
}
````

## File: app/index.jsx
````javascript
import React from "react";
import { StatusBar } from "react-native";
import SplashScreenComponent from "./SplashScreen";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="#ffffff" // Pure white background
        barStyle="light-content" // Dark icons/text (for white bg)
        translucent={false} // Solid (not overlaying content)
      />
      <SplashScreenComponent />

      {/* Toast component to render the toast messages */}
    
    </>
  );
}
````

## File: assets/lib/tailwind.jsx
````javascript
import { create } from 'twrnc';

const tw = create(require('../../tailwind.config.js'));

export default tw;
````

## File: components/UI/Button.jsx
````javascript
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../Constants/Colors";

const Button = ({ children , onPress , isActive}) => {
  return (
    <View>
      <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
        <View style={[styles.button ,  { backgroundColor: isActive ? Colors.primary : "#6C6B6E" }]}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    // backgroundColor: Colors.primary,
    minWidth : 100
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize : 17
  },

  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
});
````

## File: index.js
````javascript
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
````

## File: README.md
````markdown
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
````

## File: .gitignore
````
# Learn more https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files

# dependencies
node_modules/

# Expo
.expo/
dist/
web-build/
expo-env.d.ts

# Native
.kotlin/
*.orig.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision

# Metro
.metro-health-check*

# debug
npm-debug.*
yarn-debug.*
yarn-error.*

# macOS
.DS_Store
*.pem

# local env files
.env*.local

# typescript
*.tsbuildinfo

app-example

# @generated expo-cli sync-8d4afeec25ea8a192358fae2f8e2fc766bdce4ec
# The following patterns were generated by expo-cli

# Learn more https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files

# dependencies
node_modules/

# Expo
.expo/
dist/
web-build/
expo-env.d.ts

# Native
*.orig.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision

# Metro
.metro-health-check*

# debug
npm-debug.*
yarn-debug.*
yarn-error.*

# macOS
.DS_Store
*.pem

# local env files
.env*.local

# typescript
*.tsbuildinfo

# @end expo-cli
````

## File: assets/images/new.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#ffffff"/>

  <path d="M 150 400 C 100 150, 700 100, 750 350 C 800 600, 600 650, 400 650 C 200 650, 200 650, 150 400 Z" fill="#Edf5e9" opacity="0.7"/>

  <circle cx="200" cy="120" r="30" fill="#Edf5e9"/>
  <rect x="185" y="105" width="30" height="35" fill="none" stroke="#2c3e50" stroke-width="2"/>
  <line x1="190" y1="112" x2="210" y2="112" stroke="#2c3e50" stroke-width="2"/>
  <line x1="190" y1="118" x2="210" y2="118" stroke="#2c3e50" stroke-width="2"/>
  <line x1="190" y1="124" x2="200" y2="124" stroke="#2c3e50" stroke-width="2"/>

  <circle cx="620" cy="180" r="30" fill="#Edf5e9"/>
  <path d="M 605 170 L 610 170 L 615 185 L 630 185 L 635 170" fill="none" stroke="#2c3e50" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="615" cy="192" r="3" fill="#2c3e50"/>
  <circle cx="628" cy="192" r="3" fill="#2c3e50"/>

  <line x1="510" y1="110" x2="525" y2="95" stroke="#4CAF50" stroke-width="3" stroke-linecap="round"/>
  <line x1="535" y1="120" x2="555" y2="115" stroke="#4CAF50" stroke-width="3" stroke-linecap="round"/>
  <line x1="520" y1="135" x2="530" y2="145" stroke="#4CAF50" stroke-width="3" stroke-linecap="round"/>

  <path d="M 120 400 Q 150 250 220 220 Q 200 300 160 380 Z" fill="#4CAF50"/>
  <path d="M 220 220 Q 250 250 240 320 Q 200 280 220 220 Z" fill="#388E3C"/>
  <path d="M 160 380 Q 180 320 260 300 Q 240 370 170 390 Z" fill="#4CAF50"/>
  <path d="M 160 400 L 160 480" stroke="#388E3C" stroke-width="6"/>
  <rect x="110" y="450" width="100" height="90" rx="15" fill="#f4f1eb"/> <circle cx="160" cy="450" r="45" fill="#e8e4db"/>

  <rect x="140" y="520" width="70" height="70" rx="10" fill="#5c9a5a"/>
  <path d="M 140 540 C 110 540, 110 570, 140 570" fill="none" stroke="#5c9a5a" stroke-width="12" stroke-linecap="round"/>
  <path d="M 165 565 C 165 565, 155 550, 165 545 C 175 550, 185 545, 185 545 C 195 550, 185 565, 185 565 L 175 575 Z" fill="none" stroke="#fff" stroke-width="2"/> <rect x="520" y="320" width="130" height="190" rx="8" fill="#88b07d"/>
  <circle cx="525" cy="340" r="5" fill="#333"/>
  <circle cx="525" cy="370" r="5" fill="#333"/>
  <circle cx="525" cy="400" r="5" fill="#333"/>
  <circle cx="525" cy="430" r="5" fill="#333"/>
  <circle cx="525" cy="460" r="5" fill="#333"/>
  <circle cx="525" cy="490" r="5" fill="#333"/>
  <text x="560" y="380" font-family="cursive, Georgia" font-style="italic" font-size="20" fill="#2c3e50">Small</text>
  <text x="565" y="410" font-family="cursive, Georgia" font-style="italic" font-size="20" fill="#2c3e50">steps,</text>
  <text x="570" y="440" font-family="cursive, Georgia" font-style="italic" font-size="24" fill="#2c3e50">big</text>
  <text x="550" y="470" font-family="cursive, Georgia" font-style="italic" font-size="22" fill="#2c3e50">future</text>
  <path d="M 585 490 C 585 490, 578 482, 585 480 C 592 482, 595 480, 595 480 C 600 482, 595 490, 595 490 L 590 495 Z" fill="none" stroke="#2c3e50" stroke-width="1.5"/>

  <rect x="630" y="440" width="80" height="90" rx="10" fill="#e0e8f0" opacity="0.6"/>
  <rect x="645" y="425" width="50" height="15" fill="#d2a679" rx="3"/> <rect x="635" y="470" width="70" height="40" fill="#fff" rx="3"/> <text x="670" y="490" font-family="cursive, Georgia" font-size="14" text-anchor="middle" fill="#2c3e50">Savings</text>
  <text x="670" y="505" font-family="cursive, Georgia" font-size="14" text-anchor="middle" fill="#2c3e50">Goal</text>
  <circle cx="650" cy="510" r="12" fill="#5c9a5a"/>
  <circle cx="670" cy="520" r="12" fill="#88b07d"/>
  <circle cx="690" cy="515" r="12" fill="#5c9a5a"/>
  <circle cx="660" cy="525" r="12" fill="#4CAF50"/>
  
  <path d="M 730 310 C 730 310, 720 295, 730 290 C 740 295, 750 290, 750 290 C 760 295, 750 310, 750 310 L 740 320 Z" fill="none" stroke="#4CAF50" stroke-width="2"/>


  <g transform="translate(260, 100)">
    <rect x="-10" y="-10" width="280" height="520" rx="35" fill="rgba(0,0,0,0.1)" filter="blur(10px)"/>
    <rect x="0" y="0" width="260" height="500" rx="30" fill="#1a1a1a"/>
    <rect x="5" y="5" width="250" height="490" rx="25" fill="#ffffff"/>
    
    <path d="M 80 5 L 80 15 C 80 22 86 28 93 28 L 167 28 C 174 28 180 22 180 15 L 180 5 Z" fill="#1a1a1a"/>

    <text x="20" y="60" font-family="sans-serif" font-weight="bold" font-size="12" fill="#333">This month</text>
    <text x="20" y="75" font-family="sans-serif" font-size="10" fill="#666">Overview</text>

    <rect x="20" y="90" width="210" height="90" rx="15" fill="#f8f9fa"/>
    <text x="35" y="115" font-family="sans-serif" font-size="10" fill="#666">Spend so far</text>
    <text x="35" y="140" font-family="sans-serif" font-weight="bold" font-size="24" fill="#111">$1,650</text>
    <text x="35" y="160" font-family="sans-serif" font-size="9" fill="#888">of $2,500 budget</text>

    <circle cx="180" cy="135" r="25" fill="none" stroke="#e0e0e0" stroke-width="5"/>
    <circle cx="180" cy="135" r="25" fill="none" stroke="#4CAF50" stroke-width="5" stroke-dasharray="157" stroke-dashoffset="53" stroke-linecap="round" transform="rotate(-90 180 135)"/>
    <text x="180" y="139" font-family="sans-serif" font-weight="bold" font-size="11" fill="#333" text-anchor="middle">66%</text>

    <text x="20" y="210" font-family="sans-serif" font-weight="bold" font-size="12" fill="#333">Top spending</text>

    <rect x="20" y="225" width="24" height="24" rx="12" fill="#e8f5e9"/>
    <circle cx="32" cy="237" r="4" fill="#4CAF50"/> <text x="55" y="241" font-family="sans-serif" font-size="11" fill="#333">Groceries</text>
    <text x="230" y="241" font-family="sans-serif" font-weight="bold" font-size="11" fill="#333" text-anchor="end">$420</text>

    <rect x="20" y="265" width="24" height="24" rx="12" fill="#e8f5e9"/>
    <rect x="28" y="273" width="8" height="8" fill="#4CAF50"/> <text x="55" y="281" font-family="sans-serif" font-size="11" fill="#333">Transport</text>
    <text x="230" y="281" font-family="sans-serif" font-weight="bold" font-size="11" fill="#333" text-anchor="end">$350</text>

    <rect x="20" y="305" width="24" height="24" rx="12" fill="#e8f5e9"/>
    <polygon points="32,313 28,321 36,321" fill="#4CAF50"/> <text x="55" y="321" font-family="sans-serif" font-size="11" fill="#333">Eating Out</text>
    <text x="230" y="321" font-family="sans-serif" font-weight="bold" font-size="11" fill="#333" text-anchor="end">$150</text>

    <rect x="20" y="345" width="24" height="24" rx="12" fill="#e8f5e9"/>
    <rect x="29" y="353" width="6" height="8" rx="1" fill="#4CAF50"/> <text x="55" y="361" font-family="sans-serif" font-size="11" fill="#333">Shopping</text>
    <text x="230" y="361" font-family="sans-serif" font-weight="bold" font-size="11" fill="#333" text-anchor="end">$250</text>
    
    <rect x="80" y="475" width="100" height="4" rx="2" fill="#ccc"/>
  </g>


  <g transform="translate(400, 680)">
    <text x="0" y="0" font-family="sans-serif" font-weight="bold" font-size="36" fill="#1a2530" text-anchor="middle">Take Control of Your Money</text>
    <text x="0" y="50" font-family="cursive, Georgia" font-style="italic" font-size="32" fill="#388E3C" text-anchor="middle">One Step at a Time</text>
    
    <text x="0" y="100" font-family="sans-serif" font-size="16" fill="#666" text-anchor="middle">Simple tools to help you track spending,</text>
    <text x="0" y="125" font-family="sans-serif" font-size="16" fill="#666" text-anchor="middle">build better habits and feel more in control.</text>
  </g>

  <g transform="translate(180, 850)">
    <circle cx="50" cy="50" r="45" fill="#f1f8ee"/>
    <rect x="30" y="55" width="10" height="15" fill="none" stroke="#388E3C" stroke-width="2.5"/>
    <rect x="45" y="40" width="10" height="30" fill="none" stroke="#388E3C" stroke-width="2.5"/>
    <rect x="60" y="25" width="10" height="45" fill="none" stroke="#388E3C" stroke-width="2.5"/>
    <line x1="20" y1="70" x2="80" y2="70" stroke="#388E3C" stroke-width="2.5" stroke-linecap="round"/>
    
    <text x="50" y="130" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1a2530" text-anchor="middle">Track</text>
    <text x="50" y="155" font-family="sans-serif" font-size="13" fill="#666" text-anchor="middle">See where your</text>
    <text x="50" y="175" font-family="sans-serif" font-size="13" fill="#666" text-anchor="middle">money goes</text>
  </g>

  <line x1="310" y1="880" x2="310" y2="980" stroke="#e0e0e0" stroke-width="1"/>

  <g transform="translate(350, 850)">
    <circle cx="50" cy="50" r="45" fill="#f1f8ee"/>
    <path d="M 30 50 C 30 35, 70 35, 70 50 C 70 65, 30 65, 30 50 Z" fill="none" stroke="#388E3C" stroke-width="2.5"/>
    <circle cx="40" cy="45" r="2" fill="#388E3C"/> <line x1="65" y1="48" x2="68" y2="48" stroke="#388E3C" stroke-width="2.5"/> <path d="M 40 38 L 45 32 L 50 36" fill="none" stroke="#388E3C" stroke-width="2"/> <line x1="40" y1="62" x2="40" y2="68" stroke="#388E3C" stroke-width="2.5"/> <line x1="60" y1="62" x2="60" y2="68" stroke="#388E3C" stroke-width="2.5"/> <circle cx="50" cy="25" r="6" fill="none" stroke="#388E3C" stroke-width="2"/>
    <line x1="50" y1="36" x2="50" y2="39" stroke="#388E3C" stroke-width="2"/>
    
    <text x="50" y="130" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1a2530" text-anchor="middle">Save</text>
    <text x="50" y="155" font-family="sans-serif" font-size="13" fill="#666" text-anchor="middle">Build your savings</text>
    <text x="50" y="175" font-family="sans-serif" font-size="13" fill="#666" text-anchor="middle">with confidence</text>
  </g>

  <line x1="490" y1="880" x2="490" y2="980" stroke="#e0e0e0" stroke-width="1"/>

  <g transform="translate(520, 850)">
    <circle cx="50" cy="50" r="45" fill="#f1f8ee"/>
    <circle cx="50" cy="50" r="20" fill="none" stroke="#388E3C" stroke-width="2.5"/>
    <circle cx="50" cy="50" r="12" fill="none" stroke="#388E3C" stroke-width="2.5"/>
    <circle cx="50" cy="50" r="4" fill="#388E3C"/>
    <line x1="50" y1="50" x2="70" y2="30" stroke="#388E3C" stroke-width="2.5"/>
    <path d="M 62 30 L 70 30 L 70 38" fill="none" stroke="#388E3C" stroke-width="2.5"/>
    
    <text x="50" y="130" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1a2530" text-anchor="middle">Achieve</text>
    <text x="50" y="155" font-family="sans-serif" font-size="13" fill="#666" text-anchor="middle">Work towards goals</text>
    <text x="50" y="175" font-family="sans-serif" font-size="13" fill="#666" text-anchor="middle">that matter</text>
  </g>
</svg>
````

## File: components/RemoteSvg.js
````javascript
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

const svgCache = new Map();

const RemoteSvg = ({ uri, width = 40, height = 40 }) => {
  const [svgXmlData, setSvgXmlData] = useState(() => svgCache.get(uri) || null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (!uri) {
      setError(true);
      return () => {
        isMounted = false;
      };
    }

    const cached = svgCache.get(uri);
    if (cached) {
      setSvgXmlData(cached);
      setError(false);
      return () => {
        isMounted = false;
      };
    }

    fetch(uri)
      .then((response) => response.text())
      .then((text) => {
        svgCache.set(uri, text);
        if (isMounted) {
          setSvgXmlData(text);
          setError(false);
        }
      })
      .catch(() => {
        if (isMounted) setError(true);  // <-- only update if mounted
      });

    return () => {
      isMounted = false;
    };
  }, [uri]);

  if (error) {
    // Optional: You could replace with a better fallback SVG or icon here
    return <View style={{ width, height, backgroundColor: "#eee", borderRadius: 8 }} />;
  }

  if (!svgXmlData) {
    return <View style={{ width, height, backgroundColor: "#e8f5e9", borderRadius: 8 }} />;
  }

  return <SvgXml xml={svgXmlData} width={width} height={height} />;
};

export default RemoteSvg;
````

## File: Constants/Colors.js
````javascript
export const Colors = {
    primary : "#1BA26E",
     primary100: '#c6affc',
}
````

## File: metro.config.js
````javascript
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const { transformer, resolver } = config;

config.transformer = {
	...transformer,
	babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
};

config.resolver = {
	...resolver,
	assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
	sourceExts: [...resolver.sourceExts, "svg"],
};

module.exports = config;
````

## File: redux/slices/messageSlice.js
````javascript
// redux/slices/messageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  success: null,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    saveApiSuccess(state, action) {
      state.success = action.payload;
    },
    removeApiSuccess(state) {
      state.success = 1; // reset to initial state
    },
  },
});

export const { saveApiSuccess, removeApiSuccess } = messageSlice.actions;
export const selectApiSuccess = (state) => state.message.success;
export default messageSlice.reducer;
````

## File: redux/slices/SubscriptionSlice.js
````javascript
import { createSlice } from "@reduxjs/toolkit";
import {
  getSubscriptionViewTime,
  saveSubscriptionViewTime,
} from "../../utils/secureStore";

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: { lastViewTime: null },
  reducers: {
    setLastViewTime: (state, action) => {
      state.lastViewTime = action.payload;
    },
  },
});

export const { setLastViewTime } = subscriptionSlice.actions;

// Load last view time from SecureStore
export const loadLastViewTime = () => async (dispatch) => {
  try {
    const time = await getSubscriptionViewTime();
    dispatch(setLastViewTime(time));
  } catch (error) {
    
  }
};

// Save current time to SecureStore AND Redux
export const saveCurrentViewTime = () => async (dispatch) => {
  try {
    const now = new Date().getTime();
    await saveSubscriptionViewTime(); // save current timestamp
    dispatch(setLastViewTime(now)); // update Redux state
  } catch (error) {
  
  }
};

export default subscriptionSlice.reducer;
````

## File: tsconfig.json
````json
{
  "compilerOptions": {},
  "extends": "expo/tsconfig.base",
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts"
  ]
}
````

## File: android/app/src/debugOptimized/AndroidManifest.xml
````xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>

    <application android:usesCleartextTraffic="true" tools:targetApi="28" tools:ignore="GoogleAppIndexingWarning" tools:replace="android:usesCleartextTraffic" />
</manifest>
````

## File: app/_layout.jsx
````javascript
import { Stack } from "expo-router";
import { StatusBar, LogBox } from "react-native";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";

import { store } from "../redux/store";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  const defaultHeader = {
    headerTitleAlign: "center",
    headerShadowVisible: false,
    headerTintColor: "#000",
    headerBackTitle: "",
  };

  const hiddenHeader = { headerShown: false };

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <Stack>
        {/* Initial Screens */}
        <Stack.Screen name="index" options={hiddenHeader} />
        <Stack.Screen name="InitialScreen" options={hiddenHeader} />
        <Stack.Screen name="SecondScreen" options={hiddenHeader} />
        <Stack.Screen name="LoginScreen" options={hiddenHeader} />
        <Stack.Screen name="SignUpScreen" options={hiddenHeader} />
        <Stack.Screen name="ForgerPassword" options={hiddenHeader} />
        <Stack.Screen name="AccountVerification" options={hiddenHeader} />
        <Stack.Screen name="Otp" options={hiddenHeader} />
        <Stack.Screen name="NewPassword" options={hiddenHeader} />

        {/* Tabs */}
        <Stack.Screen name="(tabs)" options={hiddenHeader} />

        <Stack.Screen name="IncrementDecrementAmount" options={hiddenHeader} />

        {/* Main Screens */}
        <Stack.Screen
          name="Subscriptions"
          options={{
            ...defaultHeader,
            title: "Subscription Plans",
            headerBackVisible: false,
            headerTitleStyle: { fontWeight: "700" },
          }}
        />

        <Stack.Screen
          name="AccountInformation"
          options={{
            ...defaultHeader,
            title: "Account Information",
            headerTitleStyle: { fontWeight: "700" },
          }}
        />

        <Stack.Screen
          name="Currency"
          options={{
            ...defaultHeader,
            title: "Currency",
            headerTitleStyle: { fontWeight: "700" },
          }}
        />

        {/* Policies */}
        <Stack.Screen
          name="TermsAndPolicies"
          options={{
            ...defaultHeader,
            title: "Terms & Policies",
            headerTitleStyle: { fontWeight: "600" },
          }}
        />

        <Stack.Screen
          name="PrivacyPolicy"
          options={{
            ...defaultHeader,
            title: "Privacy Policy",
            headerTitleStyle: { fontWeight: "600" },
          }}
        />

        {/* Categories */}
        <Stack.Screen
          name="ExpenseCategories"
          options={{
            ...defaultHeader,
            title: "Expense Categories",
            headerTitleStyle: { fontWeight: "600" },
          }}
        />

        <Stack.Screen
          name="IncomeCategories"
          options={{
            ...defaultHeader,
            title: "Income Categories",
            headerTitleStyle: { fontWeight: "600" },
          }}
        />
      </Stack>

      <Toast />
    </Provider>
  );
}
````

## File: app/ReviewTheApp.jsx
````javascript
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // for star icons
import { LinearGradient } from "expo-linear-gradient";
;

const ReviewTheApp = () => {
  return (
    <LinearGradient
      colors={["#0f2027", "#203a43", "#2c5364"]}
      style={styles.container}
    >
      <Text style={styles.title}>Enjoying the App?</Text>
      <Text style={styles.subtitle}>Tap a star to leave your rating</Text>

      <View style={styles.starsRow}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} activeOpacity={0.7}>
            <Ionicons name="star" size={50} color="#FFD700" style={styles.star} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Submit Review</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#bbb",
    marginBottom: 30,
  },
  starsRow: {
    flexDirection: "row",
    marginBottom: 40,
  },
  star: {
    marginHorizontal: 8,
    textShadowColor: "rgba(255, 215, 0, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: "#FFD700",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
});

export default ReviewTheApp;
````

## File: redux/slices/authSlice.js
````javascript
import { createSlice } from "@reduxjs/toolkit";
import { deleteAuthData } from "../../utils/secureStore";


const authSlice = createSlice({
  name: "auth",
  initialState: { token: null },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
      deleteAuthData(); // remove from SecureStore
    },
    loadTokenFromStorage: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken, clearToken, loadTokenFromStorage } = authSlice.actions;
export default authSlice.reducer;
````

## File: redux/slices/userSlice.js
````javascript
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import { api } from "../services/api";

// =======================
// Async thunk to update user info
// =======================
export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async ({ formData, triggerUpdateUserApi }, { rejectWithValue }) => {
    try {
      // Call your existing API mutation
      const response = await triggerUpdateUserApi(formData).unwrap();

      // Save non-image data in SecureStore
      await SecureStore.setItemAsync("userFullName", formData.get("fullName"));
      await SecureStore.setItemAsync("userEmail", formData.get("email"));
      await SecureStore.setItemAsync("userContactNo", formData.get("contactNo"));

      // Save image URI locally
      if (formData.get("file")) {
        await SecureStore.setItemAsync("userImage", formData.get("file").uri);
      }

      return {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        contactNo: formData.get("contactNo"),
        imageUrl: formData.get("file") ? formData.get("file").uri : null,
      };
    } catch (error) {
      return rejectWithValue(error.data?.message || error.message);
    }
  }
);

// =======================
// Async thunk to delete user info
// =======================
export const deleteUserInfo = createAsyncThunk(
  "user/deleteUserInfo",
  async ({ triggerDeleteUserApi }, { rejectWithValue }) => {
    try {
      // Call your existing API delete mutation
      await triggerDeleteUserApi().unwrap();

      // Clear user data from SecureStore
      await SecureStore.deleteItemAsync("userFullName");
      await SecureStore.deleteItemAsync("userEmail");
      await SecureStore.deleteItemAsync("userContactNo");
      await SecureStore.deleteItemAsync("userImage");

      return true; // success flag
    } catch (error) {
      return rejectWithValue(error.data?.message || error.message);
    }
  }
);

// =======================
// User slice
// =======================
const userSlice = createSlice({
  name: "user",
  initialState: {
    fullName: null,
    email: null,
    contactNo: null,
    imageUrl: null,
    currencyCode: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.contactNo = action.payload.contactNo;
      state.imageUrl = action.payload.imageUrl;
      if (typeof action.payload.currencyCode === "string") {
        state.currencyCode = action.payload.currencyCode;
      }
    },
    setCurrencyCode: (state, action) => {
      state.currencyCode = action.payload;
    },
    clearUserData: (state) => {
      state.fullName = null;
      state.email = null;
      state.contactNo = null;
      state.imageUrl = null;
    },
    clearCurrencyCode: (state) => {
      state.currencyCode = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Update cases
      .addCase(updateUserInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fullName = action.payload.fullName;
        state.email = action.payload.email;
        state.contactNo = action.payload.contactNo;
        state.imageUrl = action.payload.imageUrl;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Delete cases
      .addCase(deleteUserInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteUserInfo.fulfilled, (state) => {
        state.status = "succeeded";
        state.fullName = null;
        state.email = null;
        state.contactNo = null;
        state.imageUrl = null;
      })
      .addCase(deleteUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  setUserData,
  setCurrencyCode,
  clearUserData,
  clearCurrencyCode,
} = userSlice.actions;
export default userSlice.reducer;
````

## File: components/UI/BackButton.jsx
````javascript
import { useRouter } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const BackButton = ({ style }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={[style, { paddingTop: 10 }]} // full touchable area
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // increases tappable area
    >
      <Image
        source={require("../../assets/images/backicon.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
  },
});
````

## File: app/(tabs)/_layout.jsx
````javascript
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Colors } from "../../Constants/Colors";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        // tabBarActiveTintColor: "#ffff",
        tabBarInactiveTintColor: "#020617",
        tabBarStyle: {
          height: "10%",
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: "#fff",
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          borderRadius: 28,
          marginHorizontal: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="DashboardScreen"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Ionicons name="grid-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="SettingScreen"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
````

## File: app/InitialScreen.jsx
````javascript
import { useRouter } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Colors } from "../Constants/Colors";
import { loadTokenFromStorage } from "../redux/slices/authSlice";
import { getToken } from "../utils/secureStore";
import OnboardingArt from "../assets/images/new.svg";

const InitialScreen = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const onboardingWidth = Math.min(width - 20, 760);
  const onboardingHeight = Math.round((onboardingWidth * 370) / 242);

  useEffect(() => {
    const loadStoredToken = async () => {
      const storedToken = await getToken();

      if (storedToken) {
        dispatch(loadTokenFromStorage(storedToken));
        setToken(storedToken);
      }
    };

    loadStoredToken();
  }, [dispatch]);

  const handleNext = async () => {
    const storedToken = token ?? (await getToken());

    if (storedToken) {
      dispatch(loadTokenFromStorage(storedToken));
      router.replace("/(tabs)");
      return;
    }

    router.replace("/LoginScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent" // Makes the status bar see-through
        barStyle="dark-content" // Dark icons/text for visibility
        translucent={true} // Lets content show behind the bar
      />

      <View style={styles.imageWrap}>
        <OnboardingArt
          width={onboardingWidth}
          height={onboardingHeight}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrap: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: "100%",
    maxWidth: 420,
    marginTop: 0,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});
````

## File: components/Charts/TotalSpentDonutChart.jsx
````javascript
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Example icon library
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, G, Path } from "react-native-svg"; // G for grouping, Path for arcs
import { useGetMessageWithTotalTransactionQuery } from "../../redux/services/api";
// Data structure for segments
const chartData = [
  { category: "Car", value: 500, color: "#6A1B9A", icon: "car" }, // Purple
  { category: "Home", value: 400, color: "#EF5350", icon: "home" }, // Red
  { category: "Groceries", value: 400, color: "#4CAF50", icon: "food" }, // Green
];

const TotalSpentDonutChart = ({
  data = chartData,
  radius = 100,
  strokeWidth = 30,
  totalSpent = 1300,
  changeAmount = 2000,
}) => {
  const currencySymbols = {
    usd: "$",
    gbp: "£",
    aud: "A$",
    nzd: "NZ$",
    eur: "€",
  };
  const circumference = 2 * Math.PI * radius;
  const innerRadius = radius - strokeWidth / 2; // For drawing arcs in the center of the stroke

  // Calculate total value from data for correct percentage distribution
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  let currentAngle = -90; // Start from the top (12 o'clock)

  const describeArc = (x, y, r, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, r, endAngle);
    const end = polarToCartesian(x, y, r, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
      "M",
      start.x,
      start.y,
      "A",
      r,
      r,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");

    return d;
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0; // Adjust for SVG's 0 degree at 3 o'clock

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const { data: messageData, refetch } =
    useGetMessageWithTotalTransactionQuery();
  const currencySymbol =
    currencySymbols[messageData?.data?.currency?.toLowerCase()] ||
    messageData?.data?.currency ||
    "$";

  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius * 2}>
        {/* Background circle (optional, but good for visual consistency) */}
        <Circle
          stroke="#eee"
          fill="none"
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2} // Adjust radius for background to align with segments
          strokeWidth={strokeWidth}
        />

        {data.map((segment, index) => {
          const segmentPercentage = (segment.value / totalValue) * 100;
          const segmentAngle = (segmentPercentage / 100) * 360;
          const endAngle = currentAngle + segmentAngle;

          const arcPath = describeArc(
            radius,
            radius,
            innerRadius,
            currentAngle,
            endAngle
          );

          // Calculate position for the icon
          const iconAngle = currentAngle + segmentAngle / 2;
          const iconPosition = polarToCartesian(
            radius,
            radius,
            radius - strokeWidth / 2,
            iconAngle - 120
          ); // Adjust icon position

          currentAngle = endAngle; // Update angle for the next segment

          return (
            <G key={index}>
              <Path
                d={arcPath}
                stroke={segment.color}
                strokeWidth={strokeWidth}
                fill="none"
              />
              {/* Icon positioning */}
              <MaterialCommunityIcons
                name={segment.icon}
                size={radius / 4} // Adjust icon size based on radius
                color="white"
                style={{
                  position: "absolute",
                  left: iconPosition.x - radius / 8, // Adjust for icon centering
                  top: iconPosition.y - radius / 8, 
                }}
              />
            </G>
          );
        })}
      </Svg>

      {/* Center content */}
      <View style={[StyleSheet.absoluteFillObject, styles.center]}>
        <Text style={styles.totalSpentLabel}>Total Spent</Text>
        <Text style={styles.totalSpentValue}>
          {currencySymbol}
          {totalSpent}
        </Text>
        <Text style={styles.changeAmount}>
          {changeAmount > 0
            ? `+${currencySymbol}${changeAmount}`
            : `-${currencySymbol}${Math.abs(changeAmount)}`}
          {changeAmount > 0 ? " ↑" : " ↓"}
        </Text>
      </View>
    </View>
  );
};

export default TotalSpentDonutChart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  totalSpentLabel: {
    fontSize: 16,
    color: "#888",
  },
  totalSpentValue: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 5,
  },
  changeAmount: {
    fontSize: 18,
    color: "#4CAF50", // Green for increase, you might want to dynamically change this
    fontWeight: "bold",
  },
});
````

## File: redux/store.js
````javascript
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import authReducer from "./slices/authSlice";
import subscriptionSlice from "./slices/SubscriptionSlice";
import userSlice from "./slices/userSlice";
import messageReducer from "./slices/messageSlice";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    subscription: subscriptionSlice,
    user: userSlice, // add user reducer here
    message: messageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
````

## File: eas.json
````json
{
  "cli": {
    "version": ">= 16.27.0",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
   "production": {
  "autoIncrement": true,
  "android": {
    "buildType": "app-bundle"
  }
}
  },
  "submit": {
    "production": {}
  }
}
````

## File: android/.gitignore
````
# OSX
#
.DS_Store

# Android/IntelliJ
#
build/
.idea
.gradle
local.properties
*.iml
*.hprof
.cxx/

# Bundle artifacts
*.jsbundle
````

## File: android/app/proguard-rules.pro
````
# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# react-native-reanimated
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# Add any project specific keep options here:
````

## File: android/app/src/debug/AndroidManifest.xml
````xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>

    <application android:usesCleartextTraffic="true" tools:targetApi="28" tools:ignore="GoogleAppIndexingWarning" tools:replace="android:usesCleartextTraffic" />
</manifest>
````

## File: android/app/src/main/res/drawable/ic_launcher_background.xml
````xml
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
  <item android:drawable="@color/splashscreen_background"/>
  <item>
    <bitmap android:gravity="center" android:src="@drawable/splashscreen_logo"/>
  </item>
</layer-list>
````

## File: android/app/src/main/res/drawable/rn_edit_text_material.xml
````xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Copyright (C) 2014 The Android Open Source Project

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
-->
<inset xmlns:android="http://schemas.android.com/apk/res/android"
       android:insetLeft="@dimen/abc_edit_text_inset_horizontal_material"
       android:insetRight="@dimen/abc_edit_text_inset_horizontal_material"
       android:insetTop="@dimen/abc_edit_text_inset_top_material"
       android:insetBottom="@dimen/abc_edit_text_inset_bottom_material"
       >

    <selector>
        <!--
          This file is a copy of abc_edit_text_material (https://bit.ly/3k8fX7I).
          The item below with state_pressed="false" and state_focused="false" causes a NullPointerException.
          NullPointerException:tempt to invoke virtual method 'android.graphics.drawable.Drawable android.graphics.drawable.Drawable$ConstantState.newDrawable(android.content.res.Resources)'

          <item android:state_pressed="false" android:state_focused="false" android:drawable="@drawable/abc_textfield_default_mtrl_alpha"/>

          For more info, see https://bit.ly/3CdLStv (react-native/pull/29452) and https://bit.ly/3nxOMoR.
        -->
        <item android:state_enabled="false" android:drawable="@drawable/abc_textfield_default_mtrl_alpha"/>
        <item android:drawable="@drawable/abc_textfield_activated_mtrl_alpha"/>
    </selector>

</inset>
````

## File: android/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml
````xml
<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/iconBackground"/>
    <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
</adaptive-icon>
````

## File: android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml
````xml
<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/iconBackground"/>
    <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
</adaptive-icon>
````

## File: android/app/src/main/res/values-night/colors.xml
````xml
<resources/>
````

## File: android/build.gradle
````
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
  repositories {
    google()
    mavenCentral()
  }
  dependencies {
    classpath('com.android.tools.build:gradle')
    classpath('com.facebook.react:react-native-gradle-plugin')
    classpath('org.jetbrains.kotlin:kotlin-gradle-plugin')
  }
}

allprojects {
  repositories {
    google()
    mavenCentral()
    maven { url 'https://www.jitpack.io' }
  }
}

apply plugin: "expo-root-project"
apply plugin: "com.facebook.react.rootproject"
````

## File: android/gradle/wrapper/gradle-wrapper.properties
````
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-8.14.3-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
````

## File: android/gradlew.bat
````batch
@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      https://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem
@rem SPDX-License-Identifier: Apache-2.0
@rem

@if "%DEBUG%"=="" @echo off
@rem ##########################################################################
@rem
@rem  Gradle startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%"=="" set DIRNAME=.
@rem This is normally unused
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%

@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi

@rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS="-Xmx64m" "-Xms64m"

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if %ERRORLEVEL% equ 0 goto execute

echo. 1>&2
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH. 1>&2
echo. 1>&2
echo Please set the JAVA_HOME variable in your environment to match the 1>&2
echo location of your Java installation. 1>&2

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto execute

echo. 1>&2
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME% 1>&2
echo. 1>&2
echo Please set the JAVA_HOME variable in your environment to match the 1>&2
echo location of your Java installation. 1>&2

goto fail

:execute
@rem Setup the command line

set CLASSPATH=


@rem Execute Gradle
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" -jar "%APP_HOME%\gradle\wrapper\gradle-wrapper.jar" %*

:end
@rem End local scope for the variables with windows NT shell
if %ERRORLEVEL% equ 0 goto mainEnd

:fail
rem Set variable GRADLE_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
set EXIT_CODE=%ERRORLEVEL%
if %EXIT_CODE% equ 0 set EXIT_CODE=1
if not ""=="%GRADLE_EXIT_CONSOLE%" exit %EXIT_CODE%
exit /b %EXIT_CODE%

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
````

## File: app/SplashScreen.jsx
````javascript
// app/SplashScreenComponent.js
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { loadTokenFromStorage } from "../redux/slices/authSlice";
import { saveApiSuccess } from "../redux/slices/messageSlice";
import { getToken } from "../utils/secureStore";
import { useLazyGetMessageWithTotalTransactionQuery } from "../redux/services/api"; // ✅ same as LoginScreen

SplashScreen.preventAutoHideAsync();

export default function SplashScreenComponent() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [triggerGetMessages] = useLazyGetMessageWithTotalTransactionQuery(); // ✅ same as LoginScreen

  useEffect(() => {
    const init = async () => {
      try {
        const storedToken = await getToken();

        if (storedToken) {
          dispatch(loadTokenFromStorage(storedToken));

          // ✅ exact same logic as LoginScreen's runAnotherAsyncFunction
          try {
            const result = await triggerGetMessages().unwrap();
            dispatch(saveApiSuccess(result.success));
          } catch (error) {
            dispatch(saveApiSuccess(null));
          }
        } else {
          dispatch(saveApiSuccess(null));
        }

        await SplashScreen.hideAsync();
        setTimeout(() => {
          if (storedToken) {
            router.replace("/(tabs)");
          } else {
            router.replace("/InitialScreen");
          }
        }, 100);

      } catch (err) {
        dispatch(saveApiSuccess(null));
        await SplashScreen.hideAsync();
        setTimeout(() => {
          router.replace("/InitialScreen");
        }, 100);
      }
    };

    init();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00C46A" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});
````

## File: utils/secureStore.js
````javascript
import * as SecureStore from "expo-secure-store";

// Save token and email
export const saveAuthData = async (token, email) => {
  if (typeof token === "string" && token.length > 0) {
    await SecureStore.setItemAsync("accessToken", token);
  }

  if (typeof email === "string" && email.length > 0) {
    await SecureStore.setItemAsync("userEmail", email);
  }
};

// Get token
export const getToken = async () => {
  return await SecureStore.getItemAsync("accessToken");
};

// Get email
export const getEmail = async () => {
  return await SecureStore.getItemAsync("userEmail");
};

// Delete all auth data
export const deleteAuthData = async () => {
  await SecureStore.deleteItemAsync("accessToken");
};

const REVIEW_KEY = "user_review_info";

// Save review info
export const setReviewInfo = async (value) => {
  try {
    await SecureStore.setItemAsync(REVIEW_KEY, JSON.stringify(value));
  } catch (e) { }
};

// Get review info
export const getReviewInfo = async () => {
  try {
    const result = await SecureStore.getItemAsync(REVIEW_KEY);
    return result ? JSON.parse(result) : null;
  } catch (e) {
    return null;
  }
};

// ===================== SUBSCRIPTION =====================

// Save last subscription view time
export const saveSubscriptionViewTime = async () => {
  try {
    const timestamp = new Date().getTime(); // current time in ms
    await SecureStore.setItemAsync(
      "subscriptionTimestamp",
      timestamp.toString()
    );
  } catch (error) { }
};

// Get last subscription view time
export const getSubscriptionViewTime = async () => {
  try {
    const ts = await SecureStore.getItemAsync("subscriptionTimestamp");
    return ts ? parseInt(ts, 10) : null;
  } catch (error) {
    return null;
  }
};

// ===================== CURRENCY =====================

const CURRENCY_KEY = "user_currency_code";

export const setCurrencyCode = async (currencyCode) => {
  try {
    if (typeof currencyCode !== "string" || currencyCode.trim().length === 0) {
      return;
    }
    await SecureStore.setItemAsync(CURRENCY_KEY, currencyCode.trim().toLowerCase());
  } catch (e) {}
};

export const getCurrencyCode = async () => {
  try {
    return await SecureStore.getItemAsync(CURRENCY_KEY);
  } catch (e) {
    return null;
  }
};

export const deleteCurrencyCode = async () => {
  try {
    await SecureStore.deleteItemAsync(CURRENCY_KEY);
  } catch (e) {}
};
````

## File: android/app/src/main/res/values/colors.xml
````xml
<resources>
  <color name="splashscreen_background">#ffffff</color>
  <color name="iconBackground">#ffffff</color>
  <color name="colorPrimary">#023c69</color>
  <color name="colorPrimaryDark">#ffffff</color>
</resources>
````

## File: android/gradlew
````
#!/bin/sh

#
# Copyright © 2015-2021 the original authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# SPDX-License-Identifier: Apache-2.0
#

##############################################################################
#
#   Gradle start up script for POSIX generated by Gradle.
#
#   Important for running:
#
#   (1) You need a POSIX-compliant shell to run this script. If your /bin/sh is
#       noncompliant, but you have some other compliant shell such as ksh or
#       bash, then to run this script, type that shell name before the whole
#       command line, like:
#
#           ksh Gradle
#
#       Busybox and similar reduced shells will NOT work, because this script
#       requires all of these POSIX shell features:
#         * functions;
#         * expansions «$var», «${var}», «${var:-default}», «${var+SET}»,
#           «${var#prefix}», «${var%suffix}», and «$( cmd )»;
#         * compound commands having a testable exit status, especially «case»;
#         * various built-in commands including «command», «set», and «ulimit».
#
#   Important for patching:
#
#   (2) This script targets any POSIX shell, so it avoids extensions provided
#       by Bash, Ksh, etc; in particular arrays are avoided.
#
#       The "traditional" practice of packing multiple parameters into a
#       space-separated string is a well documented source of bugs and security
#       problems, so this is (mostly) avoided, by progressively accumulating
#       options in "$@", and eventually passing that to Java.
#
#       Where the inherited environment variables (DEFAULT_JVM_OPTS, JAVA_OPTS,
#       and GRADLE_OPTS) rely on word-splitting, this is performed explicitly;
#       see the in-line comments for details.
#
#       There are tweaks for specific operating systems such as AIX, CygWin,
#       Darwin, MinGW, and NonStop.
#
#   (3) This script is generated from the Groovy template
#       https://github.com/gradle/gradle/blob/HEAD/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt
#       within the Gradle project.
#
#       You can find Gradle at https://github.com/gradle/gradle/.
#
##############################################################################

# Attempt to set APP_HOME

# Resolve links: $0 may be a link
app_path=$0

# Need this for daisy-chained symlinks.
while
    APP_HOME=${app_path%"${app_path##*/}"}  # leaves a trailing /; empty if no leading path
    [ -h "$app_path" ]
do
    ls=$( ls -ld "$app_path" )
    link=${ls#*' -> '}
    case $link in             #(
      /*)   app_path=$link ;; #(
      *)    app_path=$APP_HOME$link ;;
    esac
done

# This is normally unused
# shellcheck disable=SC2034
APP_BASE_NAME=${0##*/}
# Discard cd standard output in case $CDPATH is set (https://github.com/gradle/gradle/issues/25036)
APP_HOME=$( cd -P "${APP_HOME:-./}" > /dev/null && printf '%s\n' "$PWD" ) || exit

# Use the maximum available, or set MAX_FD != -1 to use that value.
MAX_FD=maximum

warn () {
    echo "$*"
} >&2

die () {
    echo
    echo "$*"
    echo
    exit 1
} >&2

# OS specific support (must be 'true' or 'false').
cygwin=false
msys=false
darwin=false
nonstop=false
case "$( uname )" in                #(
  CYGWIN* )         cygwin=true  ;; #(
  Darwin* )         darwin=true  ;; #(
  MSYS* | MINGW* )  msys=true    ;; #(
  NONSTOP* )        nonstop=true ;;
esac

CLASSPATH="\\\"\\\""


# Determine the Java command to use to start the JVM.
if [ -n "$JAVA_HOME" ] ; then
    if [ -x "$JAVA_HOME/jre/sh/java" ] ; then
        # IBM's JDK on AIX uses strange locations for the executables
        JAVACMD=$JAVA_HOME/jre/sh/java
    else
        JAVACMD=$JAVA_HOME/bin/java
    fi
    if [ ! -x "$JAVACMD" ] ; then
        die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
    fi
else
    JAVACMD=java
    if ! command -v java >/dev/null 2>&1
    then
        die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
    fi
fi

# Increase the maximum file descriptors if we can.
if ! "$cygwin" && ! "$darwin" && ! "$nonstop" ; then
    case $MAX_FD in #(
      max*)
        # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        MAX_FD=$( ulimit -H -n ) ||
            warn "Could not query maximum file descriptor limit"
    esac
    case $MAX_FD in  #(
      '' | soft) :;; #(
      *)
        # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        ulimit -n "$MAX_FD" ||
            warn "Could not set maximum file descriptor limit to $MAX_FD"
    esac
fi

# Collect all arguments for the java command, stacking in reverse order:
#   * args from the command line
#   * the main class name
#   * -classpath
#   * -D...appname settings
#   * --module-path (only if needed)
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and GRADLE_OPTS environment variables.

# For Cygwin or MSYS, switch paths to Windows format before running java
if "$cygwin" || "$msys" ; then
    APP_HOME=$( cygpath --path --mixed "$APP_HOME" )
    CLASSPATH=$( cygpath --path --mixed "$CLASSPATH" )

    JAVACMD=$( cygpath --unix "$JAVACMD" )

    # Now convert the arguments - kludge to limit ourselves to /bin/sh
    for arg do
        if
            case $arg in                                #(
              -*)   false ;;                            # don't mess with options #(
              /?*)  t=${arg#/} t=/${t%%/*}              # looks like a POSIX filepath
                    [ -e "$t" ] ;;                      #(
              *)    false ;;
            esac
        then
            arg=$( cygpath --path --ignore --mixed "$arg" )
        fi
        # Roll the args list around exactly as many times as the number of
        # args, so each arg winds up back in the position where it started, but
        # possibly modified.
        #
        # NB: a `for` loop captures its iteration list before it begins, so
        # changing the positional parameters here affects neither the number of
        # iterations, nor the values presented in `arg`.
        shift                   # remove old arg
        set -- "$@" "$arg"      # push replacement arg
    done
fi


# Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'

# Collect all arguments for the java command:
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, JAVA_OPTS, and optsEnvironmentVar are not allowed to contain shell fragments,
#     and any embedded shellness will be escaped.
#   * For example: A user cannot expect ${Hostname} to be expanded, as it is an environment variable and will be
#     treated as '${Hostname}' itself on the command line.

set -- \
        "-Dorg.gradle.appname=$APP_BASE_NAME" \
        -classpath "$CLASSPATH" \
        -jar "$APP_HOME/gradle/wrapper/gradle-wrapper.jar" \
        "$@"

# Stop when "xargs" is not available.
if ! command -v xargs >/dev/null 2>&1
then
    die "xargs is not available"
fi

# Use "xargs" to parse quoted args.
#
# With -n1 it outputs one arg per line, with the quotes and backslashes removed.
#
# In Bash we could simply go:
#
#   readarray ARGS < <( xargs -n1 <<<"$var" ) &&
#   set -- "${ARGS[@]}" "$@"
#
# but POSIX shell has neither arrays nor command substitution, so instead we
# post-process each arg (as a line of input to sed) to backslash-escape any
# character that might be a shell metacharacter, then use eval to reverse
# that process (while maintaining the separation between arguments), and wrap
# the whole thing up as a single "set" statement.
#
# This will of course break if any of these variables contains a newline or
# an unmatched quote.
#

eval "set -- $(
        printf '%s\n' "$DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS" |
        xargs -n1 |
        sed ' s~[^-[:alnum:]+,./:=@_]~\\&~g; ' |
        tr '\n' ' '
    )" '"$@"'

exec "$JAVACMD" "$@"
````

## File: app/Currency.jsx
````javascript
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { useEffect, useState } from "react";
import { useCurrencyMutation } from "../redux/services/api";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyCode, setCurrencyCode as persistCurrencyCode } from "../utils/secureStore";
import { setCurrencyCode } from "../redux/slices/userSlice";

const Currency = () => {
  const [currency, { isLoading }] = useCurrencyMutation();
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const params = useLocalSearchParams();
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.token);

  const flags = {
    us: require("../assets/images/us.png"),
    au: require("../assets/images/aus.png"),
    gb: require("../assets/images/eng.png"),
    nz: require("../assets/images/aus.png"),
    eu: require("../assets/images/eu.png"),
  };

  const currencyData = [
    {
      id: "1",
      country: "United States of America",
      code: "USD",
      flag: flags.us,
    },
    { id: "2", country: "Australia", code: "AUD", flag: flags.au },
    { id: "3", country: "England", code: "GBP", flag: flags.gb },
    { id: "4", country: "New Zealand", code: "NZD", flag: flags.nz },
    { id: "5", country: "Europe", code: "EUR", flag: flags.eu },
  ];

  useEffect(() => {
    const loadStoredCurrency = async () => {
      const stored = await getCurrencyCode();
      if (stored) {
        const upper = stored.toUpperCase();
        setSelectedCurrency(upper);
        dispatch(setCurrencyCode(stored));
      }
    };

    loadStoredCurrency();
  }, [dispatch]);

  const navigateNext = () => {
    const next = typeof params?.next === "string" ? params.next : null;
    if (next === "back") {
      router.back();
      return;
    }
    if (next) {
      router.replace(next);
      return;
    }
    router.push("/(tabs)");
  };

  // 🔹 Handle API call
  const handleCurrency = async (selected) => {
    try {
      setSelectedCurrency(selected.code); // ✅ highlight selected

      const codeLower = selected.code.toLowerCase();
      await persistCurrencyCode(codeLower);
      dispatch(setCurrencyCode(codeLower));

      // Only call backend if we have a token (logged-in / verified user)
      let successMessage = "Currency updated.";
      if (token) {
        const result = await currency({
          currency: codeLower, // ✅ matches API
        }).unwrap();
        successMessage = result?.message || successMessage;
      }

      Toast.show({
        type: "success",
        position: "top",
        text1: "Success",
        text2: successMessage,
        visibilityTime: 3000,
        autoHide: true,
      });

      navigateNext();
    } catch (err) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: err?.data?.message,
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  const CurrencyItem = ({ country, code, flag }) => (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        selectedCurrency === code && styles.selectedItem, // ✅ highlight if selected
      ]}
      onPress={() => handleCurrency({ country, code })}
      disabled={isLoading}
    >
      <View style={styles.leftContent}>
        <Image source={flag} style={styles.flag} />
        <Text
          style={[
            styles.countryName,
            selectedCurrency === code && styles.selectedText,
          ]}
        >
          {country}
        </Text>
      </View>
      <Text
        style={[
          styles.currencyCode,
          selectedCurrency === code && styles.selectedText,
        ]}
      >
        {code}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={currencyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CurrencyItem
            country={item.country}
            code={item.code}
            flag={item.flag}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default Currency;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 15,
    resizeMode: "contain",
  },
  countryName: {
    fontSize: 16,
    color: "#333",
  },
  currencyCode: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginHorizontal: 20,
  },
  selectedItem: {
    backgroundColor: "#e6f7e6", // light green background
    borderRadius: 8,
  },
  selectedText: {
    color: "green", // highlight text in green
    fontWeight: "bold",
  },
});
````

## File: app/PrivacyPolicy.jsx
````javascript
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  View,
  Text,
  StatusBar,
} from "react-native";
const PolicySkeleton = () => {
  const lines = Array.from({ length: 15 }); // Adjust number of lines based on screen height

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.scrollViewContent}>
        {/* Title Placeholder */}
        <View
          style={[
            styles.skeletonLine,
            { width: "60%", height: 28, marginBottom: 20 },
          ]}
        />

        {/* Body Text Placeholders */}
        {lines.map((_, index) => (
          <View
            key={index}
            style={[
              styles.skeletonLine,
              {
                width:
                  index % 3 === 0 ? "90%" : index % 2 === 0 ? "100%" : "75%",
                marginBottom: 12,
                marginTop: index % 5 === 0 ? 15 : 0, // Create "paragraph" spacing
              },
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};
import { useGetPrivacyPolicyQuery } from "../redux/services/api";
import RenderHTML from "react-native-render-html";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const PrivacyPolicy = () => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets(); // get safe area insets dynamically
  const { data, isLoading, error } = useGetPrivacyPolicyQuery();

  // Replace this block
  if (isLoading) {
    return <PolicySkeleton />;
  }

  if (error || !data?.success) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: "red" }}>Failed to load privacy policy.</Text>
      </View>
    );
  }

  const htmlContent = data?.data?.[0]?.policy || "";
  const htmlContentMessage = data?.message || "No privacy policy available.";
  const tagsStyles = {
    h1: { fontSize: 28, fontWeight: "bold", marginBottom: 12, color: "#333" },
    h2: { fontSize: 24, fontWeight: "bold", marginBottom: 10, color: "#333" },
    p: { fontSize: 16, marginBottom: 8, lineHeight: 22, color: "#555" },
    a: { color: "#20a074", textDecorationLine: "underline" },
    strong: { fontWeight: "bold" },
    em: { fontStyle: "italic" },
    blockquote: {
      borderLeftWidth: 4,
      borderLeftColor: "#ccc",
      paddingLeft: 12,
      color: "#666",
      fontStyle: "italic",
      marginVertical: 8,
    },
    code: {
      fontFamily: "monospace",
      backgroundColor: "#f4f4f4",
      padding: 4,
      borderRadius: 4,
    },
    pre: {
      fontFamily: "monospace",
      backgroundColor: "#f4f4f4",
      padding: 8,
      borderRadius: 4,
      marginVertical: 8,
    },
    ul: { paddingLeft: 20, marginBottom: 8 },
    ol: { paddingLeft: 20, marginBottom: 8 },
    li: { fontSize: 16, marginBottom: 4, lineHeight: 22 },
    hr: { borderBottomWidth: 1, borderBottomColor: "#ccc", marginVertical: 12 },
    img: {
      width: "100%",
      height: 200,
      resizeMode: "contain",
      marginVertical: 8,
    },
    span: { color: "#555" },
    div: { marginBottom: 8 },
    small: { fontSize: 12 },
    sup: { fontSize: 12, lineHeight: 12 },
    sub: { fontSize: 12, lineHeight: 12 },
  };

  return (
    <SafeAreaView style={[styles.safeArea]}>
      {/* Make StatusBar non-translucent so SafeAreaView works correctly */}
      <StatusBar
        translucent={false}
        backgroundColor="#fff"
        barStyle="dark-content"
      />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <RenderHTML
          contentWidth={width}
          source={{ html: htmlContent }}
          tagsStyles={tagsStyles}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  safeArea: {
    top: 0,
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  skeletonLine: {
    backgroundColor: "#f0f0f0",
    height: 16,
    borderRadius: 4,
  },
});
````

## File: app/TermsAndPolicies.jsx
````javascript
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  View,
  Text,
  StatusBar,
} from "react-native";
import { useGetTermsAndConditionsQuery } from "../redux/services/api";
import RenderHTML from "react-native-render-html";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
const PolicySkeleton = () => {
  const lines = Array.from({ length: 15 }); // Adjust number of lines based on screen height

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.scrollViewContent}>
        {/* Title Placeholder */}
        <View
          style={[
            styles.skeletonLine,
            { width: "60%", height: 28, marginBottom: 20 },
          ]}
        />

        {/* Body Text Placeholders */}
        {lines.map((_, index) => (
          <View
            key={index}
            style={[
              styles.skeletonLine,
              {
                width:
                  index % 3 === 0 ? "90%" : index % 2 === 0 ? "100%" : "75%",
                marginBottom: 12,
                marginTop: index % 5 === 0 ? 15 : 0, // Create "paragraph" spacing
              },
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};
const TermsAndPolicies = () => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { data, isLoading, error } = useGetTermsAndConditionsQuery();

  if (isLoading) {
    return <PolicySkeleton />;
  }

  if (error || !data?.success) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: "red" }}>
          Failed to load terms and conditions.
        </Text>
      </View>
    );
  }

  // IMPORTANT: Access the `term` property which contains the HTML string
  const htmlContent = data?.data?.[0]?.term || "<p>No terms available</p>";

  const tagsStyles = {
    h1: { fontSize: 28, fontWeight: "bold", marginBottom: 12, color: "#333" },
    h2: { fontSize: 24, fontWeight: "bold", marginBottom: 10, color: "#333" },
    h3: { fontSize: 20, fontWeight: "bold", marginBottom: 8, color: "#333" },
    h4: { fontSize: 18, fontWeight: "bold", marginBottom: 6, color: "#333" },
    h5: { fontSize: 16, fontWeight: "bold", marginBottom: 4, color: "#333" },
    h6: { fontSize: 14, fontWeight: "bold", marginBottom: 2, color: "#333" },
    p: { fontSize: 16, marginBottom: 8, lineHeight: 22, color: "#555" },
    a: { color: "#20a074", textDecorationLine: "underline" },
    strong: { fontWeight: "bold" },
    b: { fontWeight: "bold" },
    em: { fontStyle: "italic" },
    i: { fontStyle: "italic" },
    u: { textDecorationLine: "underline" },
    s: { textDecorationLine: "line-through" },
    del: { textDecorationLine: "line-through" },
    blockquote: {
      borderLeftWidth: 4,
      borderLeftColor: "#ccc",
      paddingLeft: 12,
      color: "#666",
      fontStyle: "italic",
      marginVertical: 8,
    },
    code: {
      fontFamily: "monospace",
      backgroundColor: "#f4f4f4",
      padding: 4,
      borderRadius: 4,
    },
    pre: {
      fontFamily: "monospace",
      backgroundColor: "#f4f4f4",
      padding: 8,
      borderRadius: 4,
      marginVertical: 8,
    },
    ul: { paddingLeft: 20, marginBottom: 8 },
    ol: { paddingLeft: 20, marginBottom: 8 },
    li: { fontSize: 16, marginBottom: 4, lineHeight: 22 },
    hr: { borderBottomWidth: 1, borderBottomColor: "#ccc", marginVertical: 12 },
    table: { borderWidth: 1, borderColor: "#ccc", marginBottom: 12 },
    th: {
      fontWeight: "bold",
      padding: 6,
      borderWidth: 1,
      borderColor: "#ccc",
      backgroundColor: "#f0f0f0",
    },
    td: { padding: 6, borderWidth: 1, borderColor: "#ccc" },
    img: {
      width: "100%",
      height: 200,
      resizeMode: "contain",
      marginVertical: 8,
    },
    span: { color: "#555" },
    div: { marginBottom: 8 },
    small: { fontSize: 12 },
    sup: { fontSize: 12, lineHeight: 12 },
    sub: { fontSize: 12, lineHeight: 12 },
    figure: { marginVertical: 8 },
    figcaption: { fontSize: 14, textAlign: "center", color: "#666" },
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent={false}
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <RenderHTML
          contentWidth={width}
          source={{ html: htmlContent }}
          tagsStyles={tagsStyles}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndPolicies;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
````

## File: android/app/src/main/res/values/strings.xml
````xml
<resources>
  <string name="app_name">MY Money Sorted</string>
  <string name="expo_splash_screen_resize_mode" translatable="false">contain</string>
  <string name="expo_splash_screen_status_bar_translucent" translatable="false">false</string>
  <string name="expo_system_ui_user_interface_style" translatable="false">automatic</string>
</resources>
````

## File: android/app/src/main/res/values/styles.xml
````xml
<resources xmlns:tools="http://schemas.android.com/tools">
  <style name="AppTheme" parent="Theme.AppCompat.DayNight.NoActionBar">
    <item name="android:enforceNavigationBarContrast" tools:targetApi="29">true</item>
    <item name="android:editTextBackground">@drawable/rn_edit_text_material</item>
    <item name="colorPrimary">@color/colorPrimary</item>
    <item name="android:statusBarColor">#ffffff</item>
  </style>
  <style name="Theme.App.SplashScreen" parent="Theme.SplashScreen">
    <item name="windowSplashScreenBackground">@color/splashscreen_background</item>
    <item name="windowSplashScreenAnimatedIcon">@drawable/splashscreen_logo</item>
    <item name="postSplashScreenTheme">@style/AppTheme</item>
    <item name="android:windowSplashScreenBehavior">icon_preferred</item>
  </style>
</resources>
````

## File: android/gradle.properties
````
# Project-wide Gradle settings.

# IDE (e.g. Android Studio) users:
# Gradle settings configured through the IDE *will override*
# any settings specified in this file.

# For more details on how to configure your build environment visit
# http://www.gradle.org/docs/current/userguide/build_environment.html

# Specifies the JVM arguments used for the daemon process.
# The setting is particularly useful for tweaking memory settings.
# Default value: -Xmx512m -XX:MaxMetaspaceSize=256m
org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m

# When configured, Gradle will run in incubating parallel mode.
# This option should only be used with decoupled projects. More details, visit
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects
org.gradle.parallel=true

# AndroidX package structure to make it clearer which packages are bundled with the
# Android operating system, and which are packaged with your app's APK
# https://developer.android.com/topic/libraries/support-library/androidx-rn
android.useAndroidX=true

# Enable AAPT2 PNG crunching
android.enablePngCrunchInReleaseBuilds=true

# Use this property to specify which architecture you want to build.
# You can also override it from the CLI using
# ./gradlew <task> -PreactNativeArchitectures=x86_64
reactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64

# Use this property to enable support to the new architecture.
# This will allow you to use TurboModules and the Fabric render in
# your application. You should enable this flag either if you want
# to write custom TurboModules/Fabric components OR use libraries that
# are providing them.
newArchEnabled=true

# Use this property to enable or disable the Hermes JS engine.
# If set to false, you will be using JSC instead.
hermesEnabled=true

# Use this property to enable edge-to-edge display support.
# This allows your app to draw behind system bars for an immersive UI.
# Note: Only works with ReactActivity and should not be used with custom Activity.
edgeToEdgeEnabled=true

# Enable GIF support in React Native images (~200 B increase)
expo.gif.enabled=true
# Enable webp support in React Native images (~85 KB increase)
expo.webp.enabled=true
# Enable animated webp support (~3.4 MB increase)
# Disabled by default because iOS doesn't support animated webp
expo.webp.animated=false

# Enable network inspector
EX_DEV_CLIENT_NETWORK_INSPECTOR=true

# Use legacy packaging to compress native libraries in the resulting APK.
expo.useLegacyPackaging=false

# Specifies whether the app is configured to use edge-to-edge via the app config or plugin
# WARNING: This property has been deprecated and will be removed in Expo SDK 55. Use `edgeToEdgeEnabled` or `react.edgeToEdgeEnabled` to determine whether the project is using edge-to-edge.
expo.edgeToEdgeEnabled=true
````

## File: android/settings.gradle
````
pluginManagement {
  def reactNativeGradlePlugin = new File(
    providers.exec {
      workingDir(rootDir)
      commandLine("node", "--print", "require.resolve('@react-native/gradle-plugin/package.json', { paths: [require.resolve('react-native/package.json')] })")
    }.standardOutput.asText.get().trim()
  ).getParentFile().absolutePath
  includeBuild(reactNativeGradlePlugin)
  
  def expoPluginsPath = new File(
    providers.exec {
      workingDir(rootDir)
      commandLine("node", "--print", "require.resolve('expo-modules-autolinking/package.json', { paths: [require.resolve('expo/package.json')] })")
    }.standardOutput.asText.get().trim(),
    "../android/expo-gradle-plugin"
  ).absolutePath
  includeBuild(expoPluginsPath)
}

plugins {
  id("com.facebook.react.settings")
  id("expo-autolinking-settings")
}

extensions.configure(com.facebook.react.ReactSettingsExtension) { ex ->
  if (System.getenv('EXPO_USE_COMMUNITY_AUTOLINKING') == '1') {
    ex.autolinkLibrariesFromCommand()
  } else {
    ex.autolinkLibrariesFromCommand(expoAutolinking.rnConfigCommand)
  }
}
expoAutolinking.useExpoModules()

rootProject.name = 'MY Money Sorted'

expoAutolinking.useExpoVersionCatalog()

include ':app'
includeBuild(expoAutolinking.reactNativeGradlePlugin)
````

## File: app/NewPassword.jsx
````javascript
import { Ionicons } from "@expo/vector-icons"; // ✅ make sure to install expo/vector-icons
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackButton from "../components/UI/BackButton";
import { Colors } from "../Constants/Colors";
import { useResetPasswordMutation } from "../redux/services/api";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();
  const [resetPassword] = useResetPasswordMutation();
  const { email, tokenCode } = useLocalSearchParams();

  const handleNext = async () => {
    if (!newPassword) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Password cannot be empty",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Passwords do not match",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      await resetPassword({
        email,
        tokenCode,
        newPassword,
      }).unwrap();

      router.replace("/LoginScreen");
    } catch (e) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: e?.data?.message || "Something went wrong",
        visibilityTime: 3000,
        autoHide: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
      >
        <BackButton style={styles.backButton} />
        <View style={styles.content}>
          <Text style={styles.title}>New Password</Text>
          <Text style={styles.subTitle}>Please enter your new password</Text>

          {/* Password Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.input}
                placeholder="********"
                placeholderTextColor="#888"
                secureTextEntry={!showPassword}
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <Pressable
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={24}
                  color={Colors.primary}
                />
              </Pressable>
            </View>
          </View>

          {/* Confirm Password Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.input}
                placeholder="********"
                placeholderTextColor="#888"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <Pressable
                style={styles.eyeIcon}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye" : "eye-off"}
                  size={24}
                  color={Colors.primary}
                />
              </Pressable>
            </View>
          </View>

          {/* Update Button */}
          <TouchableOpacity
            style={[
              styles.verifyButton,
              (isLoading || !newPassword) && { opacity: 0.6 },
            ]}
            onPress={handleNext}
            disabled={isLoading || !newPassword}
          >
            <Text style={styles.verifyText}>
              {isLoading ? "Updating..." : "Update"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 20,
    paddingTop: 20,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subTitle: {
    marginVertical: 15,
    fontSize: 16,
    textAlign: "center",
  },
  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: Colors.primary,
    marginBottom: 5,
    fontWeight: "500",
    marginTop: 20,
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  input: {
    flex: 1,
    height: 45,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    paddingRight: 45, // make room for eye icon
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  verifyButton: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 5,
    width: "100%",
    marginTop: "10%",
  },
  verifyText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    marginTop: 10,
    zIndex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24
  },
});
````

## File: app/Otp.jsx
````javascript
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackButton from "../components/UI/BackButton";
import { Colors } from "../Constants/Colors";
import { useVerifyCodeMutation } from "../redux/services/api";
import { useLocalSearchParams, useSearchParams } from "expo-router";
import { useForgetPasswordMutation } from "../redux/services/api";
import Toast from "react-native-toast-message";
const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [countdown, setCountdown] = useState(60);

  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);
  const router = useRouter();
  const [oTP] = useVerifyCodeMutation();
  const [forgetPassword] = useForgetPasswordMutation();
  const { email } = useLocalSearchParams();

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleNext = async () => {
    try {
      const response = await oTP({
        email: email,
        tokenCode: otp.join(""),
      }).unwrap();

      // If successful, navigate to NewPassword screen
      router.push({
        pathname: "/NewPassword",
        params: { email: email, tokenCode: otp.join("") },
      });
    } catch (e) {
      const errorMessage =
        e?.data?.message || "Invalid code. Please try again.";
      Toast.show({
        type: "error",
        position: "top",
        text1: "OTP Error",
        text2: errorMessage,
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResendOtp = async () => {
    setCountdown(60);
    setIsResendDisabled(true);
    // Add resend logic here
    try {
      const response = await forgetPassword({
        email: email,
      }).unwrap();
    } catch (e) { }
  };
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <BackButton style={styles.backButton} />
          <Text style={styles.title}>OTP</Text>
          <Text style={styles.subTitle}>
            To reset you account, please enter the verification code you get on
            your e-mail.
          </Text>

          <View style={styles.inputContainer}>
            {[0, 1, 2, 3, 4].map((index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.input}
                keyboardType="numeric"
                maxLength={1}
                value={otp[index]}
                onChangeText={(text) => handleOtpChange(index, text)}
                onKeyPress={({ nativeEvent: { key } }) =>
                  handleKeyPress(index, key)
                }
                selectTextOnFocus
              />
            ))}
          </View>

          <TouchableOpacity
            onPress={() => handleNext()}
            style={styles.verifyButton}
          >
            <Text style={styles.verifyText}>Send</Text>
          </TouchableOpacity>

          <View style={styles.resendCode}>
            <Text>
              {isResendDisabled
                ? `Resend OTP in ${countdown}s`
                : "Didn't get code?"}
            </Text>

            <TouchableOpacity
              onPress={handleResendOtp}
              disabled={isResendDisabled}
            >
              <Text style={{ color: isResendDisabled ? "gray" : "#1BA26E" }}>
                Resend OTP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20, // ✅ works now
  },

  content: {
    flex: 1,
    justifyContent: "center", // center content
    paddingHorizontal: 24
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center", // <-- center text
  },

  subTitle: {
    marginVertical: 15,
    fontSize: 16, // <-- center text
  },
  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: Colors.primary,
    marginBottom: 5,
    fontWeight: "500",
    marginTop: 20,
  },
  input: {
    width: 45,
    height: 50,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
  },
  verifyButton: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 5,
    width: "100%",
  },
  verifyText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 10,
  },
  resendCode: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    marginTop: 10,
  },
});
````

## File: components/Charts/ExpenseIncome.jsx
````javascript
import { memo, useCallback } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import RemoteSvg from "../RemoteSvg";

// ✅ Lifted OUTSIDE — stable identity across re-renders
const CategoryItem = memo(({ item, onPress }) => (
  <View style={styles.categoryItem}>
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        {item.icon?.endsWith(".svg") ? (
          <RemoteSvg uri={item.icon} width={60} height={60} />
        ) : (
          <Image
            source={{ uri: item.icon }}
            style={styles.iconImage}
            resizeMode="cover"
          />
        )}
      </View>
      <Text style={styles.amountText}>{item?.amount}</Text>
    </TouchableOpacity>
  </View>
));

const ExpenseIncome = ({ expenseData }) => {
  const router = useRouter();

  // ✅ Stable navigation callback
  const handlePress = useCallback(
    (item) => {
      router.push({
        pathname: "/IncrementDecrementAmount",
        params: {
          id: item.transactionId,
          name: item.name,
          image: item.icon,
          fromTab: item.categoryType,
        },
      });
    },
    [router]
  );

  return (
    <View style={styles.listContainer}>
      {expenseData.map((item) => (
        <CategoryItem
          key={item.transactionId}
          item={item}
          onPress={() => handlePress(item)}
        />
      ))}
    </View>
  );
};

export default ExpenseIncome;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryItem: {
    width: "20%",
    alignItems: "center",
    marginBottom: 15,
    marginHorizontal: 5,
  },
  iconContainer: {
    backgroundColor: "#E0F2E9",
    borderRadius: 10,
    width: 60,
    height: 60,
    overflow: "hidden",
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    shadowOffset: { width: 0, height: 1 },
  },
  iconImage: {
    width: "100%",
    height: "100%",
  },
  amountText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2E8B57",
    marginTop: 5,
    textAlign: "center",
  },
});
````

## File: app/ForgerPassword.jsx
````javascript
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import BackButton from "../components/UI/BackButton";
import { Colors } from "../Constants/Colors";
import { useForgetPasswordMutation } from "../redux/services/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const [forgetPassword] = useForgetPasswordMutation();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  const validateEmail = (text) => {
    setEmail(text);
    // no UI errors, just updates state
  };

  const handleNext = async () => {
    if (!isEmailValid) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Validation Error",
        text2: "Please enter a valid email address.",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await forgetPassword({ email }).unwrap();
      router.push({
        pathname: "/Otp",
        params: { email },
      });
    } catch (err) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: err?.data?.message || "Something went wrong. Please try again.",
        visibilityTime: 3000,
        autoHide: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
      >
        <BackButton style={styles.backButton} />
        <View style={styles.content}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subTitle}>
            To reset your password, Please enter the email address that is
            associated with the account. You’ll get the link in your e-mail.
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="consultme@gmail.com"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={validateEmail}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
          </View>

          <TouchableOpacity
            style={[
              styles.verifyButton,
              (!isEmailValid || isLoading) && { opacity: 0.6 },
            ]}
            onPress={handleNext}
            disabled={!isEmailValid || isLoading}
          >
            <Text style={styles.verifyText}>
              {isLoading ? "Sending..." : "Send"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 20,
    paddingTop: 20,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center", // ✅ correct
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,

    marginVertical: 15,
  },

  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: Colors.primary,
    marginBottom: 5,
    fontWeight: "500",
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
  verifyButton: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 5,
    width: "100%",
  },
  verifyText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    marginTop: 10,
    zIndex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24
  },
});
````

## File: components/CostEarnList.jsx
````javascript
import { memo, useCallback } from "react";
import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RemoteSvg from "./RemoteSvg";

// ✅ Lifted OUTSIDE the parent — stable identity, no remounts on parent re-render
const SpecificCostItem = memo(
  ({ icon, name, createdAt, amount, onPress }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.itemContainer}>
        <View style={styles.iconAndText}>
          {icon ? (
            icon.endsWith(".svg") ? (
              <RemoteSvg uri={icon} width={40} height={40} />
            ) : (
              <Image
                source={{ uri: icon }}
                style={styles.iconImage}
                resizeMode="cover"
              />
            )
          ) : (
            <View style={styles.iconPlaceholder} />
          )}
          <View>
            <Text style={styles.itemName}>  {name}</Text>
            <Text style={styles.itemDate}>  {createdAt?.split("T")[0]}</Text>
          </View>
        </View>
        <Text style={styles.itemAmount}>{amount}</Text>
      </View>
    </TouchableOpacity>
  )
);

const CostEarnList = ({ data }) => {
  const router = useRouter();

  // ✅ Stable navigation callback — won't trigger item re-renders
  const handlePress = useCallback(
    (item) => {
      router.push({
        pathname: "/IncrementDecrementAmount",
        params: {
          image: item.icon,
          name: item.name,
          createdAt: item.createdAt,
          ammount: item.amount,
          transactionId: item.transactionId,
          categoryType: item.categoryType,
          fromTab: item.categoryType,
        },
      });
    },
    [router]
  );

  // ✅ Memoized renderItem — only changes if handlePress changes
  const renderItem = useCallback(
    ({ item }) => (
      <SpecificCostItem
        icon={item.icon}
        name={item.name}
        createdAt={item.createdAt}
        amount={item.amount}
        transactionId={item.transactionId}
        categoryType={item.categoryType}
        onPress={() => handlePress(item)}
      />
    ),
    [handlePress]
  );

  const keyExtractor = useCallback(
    (item) => item.transactionId.toString(),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        removeClippedSubviews={false} // ✅ prevents flash when items re-enter viewport
        initialNumToRender={15}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </View>
  );
};

export default CostEarnList;

const styles = StyleSheet.create({
  container: { flex: 1 },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  iconAndText: { flexDirection: "row", alignItems: "center" },
  iconImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: "#e8f5e9",
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginRight: 15,
  },
  itemName: { fontSize: 16, fontWeight: "500", color: "#333" },
  itemDate: { fontSize: 13, color: "#777", marginTop: 2 },
  itemAmount: { fontSize: 16, fontWeight: "bold", color: "#333" },
});
````

## File: android/app/src/main/AndroidManifest.xml
````xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools">
  <uses-permission android:name="android.permission.INTERNET"/>
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
  <uses-permission android:name="android.permission.RECORD_AUDIO"/>
  <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
  <uses-permission android:name="android.permission.VIBRATE"/>
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
  <uses-permission android:name="com.android.vending.BILLING"/>
  <queries>
    <intent>
      <action android:name="android.intent.action.VIEW"/>
      <category android:name="android.intent.category.BROWSABLE"/>
      <data android:scheme="https"/>
    </intent>
  </queries>
  <application android:name=".MainApplication" android:label="@string/app_name" android:icon="@mipmap/ic_launcher" android:roundIcon="@mipmap/ic_launcher_round" android:allowBackup="true" android:theme="@style/AppTheme" android:supportsRtl="true" android:enableOnBackInvokedCallback="false" android:fullBackupContent="@xml/secure_store_backup_rules" android:dataExtractionRules="@xml/secure_store_data_extraction_rules">
    <meta-data android:name="expo.modules.updates.ENABLED" android:value="false"/>
    <meta-data android:name="expo.modules.updates.EXPO_UPDATES_CHECK_ON_LAUNCH" android:value="ALWAYS"/>
    <meta-data android:name="expo.modules.updates.EXPO_UPDATES_LAUNCH_WAIT_MS" android:value="0"/>
    <activity android:name=".MainActivity" android:configChanges="keyboard|keyboardHidden|orientation|screenSize|screenLayout|uiMode" android:launchMode="singleTask" android:windowSoftInputMode="adjustPan" android:theme="@style/Theme.App.SplashScreen" android:exported="true" android:screenOrientation="portrait">
      <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
        <category android:name="android.intent.category.LAUNCHER"/>
      </intent-filter>
      <intent-filter>
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="budgetiq"/>
      </intent-filter>
    </activity>
  </application>
</manifest>
````

## File: app/ExpenseCategories.jsx
````javascript
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  StatusBar,
  Platform,
} from "react-native";
import Toast from "react-native-toast-message";
import RemoteSvg from "../components/RemoteSvg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useGetAllCategoriesQuery } from "../redux/services/api";
import * as SecureStore from "expo-secure-store";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const CategorySkeleton = () => {
  // Create an array of 10 items to fill the screen
  const placeholders = Array.from({ length: 10 });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ paddingHorizontal: 16 }}>
        {placeholders.map((_, index) => (
          <View key={index} style={styles.skeletonItem}>
            {/* Mimics iconContainer */}
            <View style={styles.skeletonIcon} />

            {/* Mimics label */}
            <View style={styles.skeletonText} />

            {/* Mimics checkbox */}
            <View style={styles.skeletonCheckbox} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};
const ExpensesCategories = () => {
  const insets = useSafeAreaInsets();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [apiLoaded, setApiLoaded] = useState(false);
  const router = useRouter();

  // Fetch expense categories from API
  const {
    data: expenseCategories,
    isLoading,
    isError,
  } = useGetAllCategoriesQuery("expenses");

  // After API loads, fetch saved selections from SecureStore
  useEffect(() => {
    const loadSelections = async () => {
      if (expenseCategories?.result?.length) {
        try {
          const storedCategories = await SecureStore.getItemAsync(
            "selectedExpenseCategories",
          );
          if (storedCategories) {
            const storedIds = JSON.parse(storedCategories);
            const validIds = storedIds.filter((id) =>
              expenseCategories.result.some((cat) => cat._id === id),
            );
            setSelectedCategories(validIds);
          }
        } catch {}
        setApiLoaded(true);
      }
    };
    loadSelections();
  }, [expenseCategories]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((cat) => cat !== id) : [...prev, id],
    );
  };

  const isSelected = (id) => selectedCategories.includes(id);

  const handleSave = async () => {
    if (selectedCategories.length === 0) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Please select at least one category.",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    try {
      await SecureStore.setItemAsync(
        "selectedExpenseCategories",
        JSON.stringify(selectedCategories),
      );
      router.push("/DashboardScreen");
    } catch {}
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => toggleCategory(item._id)}
      style={styles.item}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        {item.categoryImage ? (
          <RemoteSvg uri={item.categoryImage} width={40} height={40} />
        ) : (
          <Icon name="image-off" size={24} color="#999" />
        )}
      </View>
      <Text style={styles.label}>{item.name}</Text>
      <Icon
        name={
          isSelected(item._id) ? "checkbox-marked" : "checkbox-blank-outline"
        }
        size={24}
        color="#20a074"
        style={styles.checkbox}
      />
    </TouchableOpacity>
  );

  if (isLoading || !apiLoaded) {
    return <CategorySkeleton />;
  }

  if (isError || !expenseCategories?.result?.length) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={{ color: "#333" }}>Failed to load categories.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea]}>
      <StatusBar
        translucent={false}
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <FlatList
        data={expenseCategories.result}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 80,
          paddingHorizontal: 16,
        }}
      />
      <TouchableOpacity
        style={[styles.saveButton, { marginBottom: insets.bottom + 20 }]}
        onPress={handleSave}
      >
        <Text style={styles.saveText}>SAVE CHANGES</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ExpensesCategories;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#e4f3ec",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  image: { width: "100%", height: "100%", borderRadius: 4 },
  label: { flex: 1, fontSize: 16, color: "#333" },
  checkbox: { marginRight: 4 },
  saveButton: {
    backgroundColor: "#20a074",
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
  },
  saveText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  skeletonItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  skeletonIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#efefef", // Light grey
    borderRadius: 10,
    marginRight: 14,
  },
  skeletonText: {
    flex: 1,
    height: 14,
    backgroundColor: "#efefef",
    borderRadius: 4,
    marginRight: 40, // Leave space for the checkbox
  },
  skeletonCheckbox: {
    width: 24,
    height: 24,
    backgroundColor: "#efefef",
    borderRadius: 4,
  },
});
````

## File: app/IncomeCategories.jsx
````javascript
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import Toast from "react-native-toast-message";
import RemoteSvg from "../components/RemoteSvg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useGetAllCategoriesQuery } from "../redux/services/api";
import * as SecureStore from "expo-secure-store";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
const CategorySkeleton = () => {
  const placeholders = Array.from({ length: 10 });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ paddingHorizontal: 16, marginTop: 10 }}>
        {placeholders.map((_, index) => (
          <View key={index} style={styles.skeletonItem}>
            {/* Mimics iconContainer */}
            <View style={styles.skeletonIcon} />

            {/* Mimics label */}
            <View style={styles.skeletonText} />

            {/* Mimics checkbox */}
            <View style={styles.skeletonCheckbox} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const IncomeCategories = () => {
  const insets = useSafeAreaInsets();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [apiLoaded, setApiLoaded] = useState(false);
  const router = useRouter();

  // Fetch income categories from API
  const {
    data: incomeCategories,
    isLoading,
    isError,
  } = useGetAllCategoriesQuery("income");
console.log("Income Categories Data:", incomeCategories); // Debugging line
  // Load saved selections from SecureStore after API loads
  useEffect(() => {
    const loadSelections = async () => {
      if (incomeCategories?.result?.length) {
        try {
          const storedCategories = await SecureStore.getItemAsync(
            "selectedIncomeCategories",
          );
          if (storedCategories) {
            const storedIds = JSON.parse(storedCategories);
            const validIds = storedIds.filter((id) =>
              incomeCategories.result.some((cat) => cat._id === id),
            );
            setSelectedCategories(validIds);
          }
        } catch {}
        setApiLoaded(true);
      }
    };
    loadSelections();
  }, [incomeCategories]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((cat) => cat !== id) : [...prev, id],
    );
  };

  const isSelected = (id) => selectedCategories.includes(id);

  const handleSave = async () => {
    if (selectedCategories.length === 0) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Please select at least one category.",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    try {
      await SecureStore.setItemAsync(
        "selectedIncomeCategories",
        JSON.stringify(selectedCategories),
      );
      router.push("/DashboardScreen");
    } catch {}
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => toggleCategory(item._id)}
      style={styles.item}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        {item.categoryImage ? (
          <RemoteSvg uri={item.categoryImage} width={40} height={40} />
        ) : (
          <Icon name="image-off" size={24} color="#999" />
        )}
      </View>
      <Text style={styles.label}>{item.name}</Text>
      <Icon
        name={
          isSelected(item._id) ? "checkbox-marked" : "checkbox-blank-outline"
        }
        size={24}
        color="#20a074"
        style={styles.checkbox}
      />
    </TouchableOpacity>
  );

  // Replace the old if (isLoading || !apiLoaded) block with this:
  if (isLoading || !apiLoaded) {
    return <CategorySkeleton />;
  }

  if (isError || !incomeCategories?.result?.length) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={{ color: "#333" }}>Failed to load categories.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea]}>
      <StatusBar
        translucent={false}
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <FlatList
        data={incomeCategories.result}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 80,
          paddingHorizontal: 16,
        }}
      />
      <TouchableOpacity
        style={[styles.saveButton, { marginBottom: insets.bottom + 20 }]}
        onPress={handleSave}
      >
        <Text style={styles.saveText}>SAVE CHANGES</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IncomeCategories;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#e4f3ec",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  image: { width: "100%", height: "100%", borderRadius: 4 },
  label: { flex: 1, fontSize: 16, color: "#333" },
  checkbox: { marginRight: 4 },
  saveButton: {
    backgroundColor: "#20a074",
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
  },
  saveText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  skeletonItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  skeletonIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginRight: 14,
  },
  skeletonText: {
    flex: 0.6, // Shorter than full width for a realistic text look
    height: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
  skeletonCheckbox: {
    width: 24,
    height: 24,
    backgroundColor: "#f0f0f0",
    borderRadius: 6,
    marginLeft: "auto", // Pushes it to the right
  },
});
````

## File: app/SecondScreen.jsx
````javascript
import { useEffect } from "react";
import { useRouter } from "expo-router";

const SecondScreen = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/InitialScreen");
  }, [router]);

  return null;
};

export default SecondScreen;
````

## File: android/app/build.gradle
````
apply plugin: "com.android.application"
apply plugin: "org.jetbrains.kotlin.android"
apply plugin: "com.facebook.react"

def projectRoot = rootDir.getAbsoluteFile().getParentFile().getAbsolutePath()

/**
 * This is the configuration block to customize your React Native Android app.
 * By default you don't need to apply any configuration, just uncomment the lines you need.
 */
react {
    entryFile = file(["node", "-e", "require('expo/scripts/resolveAppEntry')", projectRoot, "android", "absolute"].execute(null, rootDir).text.trim())
    reactNativeDir = new File(["node", "--print", "require.resolve('react-native/package.json')"].execute(null, rootDir).text.trim()).getParentFile().getAbsoluteFile()
    hermesCommand = new File(["node", "--print", "require.resolve('react-native/package.json')"].execute(null, rootDir).text.trim()).getParentFile().getAbsolutePath() + "/sdks/hermesc/%OS-BIN%/hermesc"
    codegenDir = new File(["node", "--print", "require.resolve('@react-native/codegen/package.json', { paths: [require.resolve('react-native/package.json')] })"].execute(null, rootDir).text.trim()).getParentFile().getAbsoluteFile()

    enableBundleCompression = (findProperty('android.enableBundleCompression') ?: false).toBoolean()
    // Use Expo CLI to bundle the app, this ensures the Metro config
    // works correctly with Expo projects.
    cliFile = new File(["node", "--print", "require.resolve('@expo/cli', { paths: [require.resolve('expo/package.json')] })"].execute(null, rootDir).text.trim())
    bundleCommand = "export:embed"

    /* Folders */
     //   The root of your project, i.e. where "package.json" lives. Default is '../..'
    // root = file("../../")
    //   The folder where the react-native NPM package is. Default is ../../node_modules/react-native
    // reactNativeDir = file("../../node_modules/react-native")
    //   The folder where the react-native Codegen package is. Default is ../../node_modules/@react-native/codegen
    // codegenDir = file("../../node_modules/@react-native/codegen")

    /* Variants */
    //   The list of variants to that are debuggable. For those we're going to
    //   skip the bundling of the JS bundle and the assets. By default is just 'debug'.
    //   If you add flavors like lite, prod, etc. you'll have to list your debuggableVariants.
    // debuggableVariants = ["liteDebug", "prodDebug"]

    /* Bundling */
    //   A list containing the node command and its flags. Default is just 'node'.
    // nodeExecutableAndArgs = ["node"]

    //
    //   The path to the CLI configuration file. Default is empty.
    // bundleConfig = file(../rn-cli.config.js)
    //
    //   The name of the generated asset file containing your JS bundle
    // bundleAssetName = "MyApplication.android.bundle"
    //
    //   The entry file for bundle generation. Default is 'index.android.js' or 'index.js'
    // entryFile = file("../js/MyApplication.android.js")
    //
    //   A list of extra flags to pass to the 'bundle' commands.
    //   See https://github.com/react-native-community/cli/blob/main/docs/commands.md#bundle
    // extraPackagerArgs = []

    /* Hermes Commands */
    //   The hermes compiler command to run. By default it is 'hermesc'
    // hermesCommand = "$rootDir/my-custom-hermesc/bin/hermesc"
    //
    //   The list of flags to pass to the Hermes compiler. By default is "-O", "-output-source-map"
    // hermesFlags = ["-O", "-output-source-map"]

    /* Autolinking */
    autolinkLibrariesWithApp()
}

/**
 * Set this to true in release builds to optimize the app using [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization).
 */
def enableMinifyInReleaseBuilds = (findProperty('android.enableMinifyInReleaseBuilds') ?: false).toBoolean()

/**
 * The preferred build flavor of JavaScriptCore (JSC)
 *
 * For example, to use the international variant, you can use:
 * `def jscFlavor = 'org.webkit:android-jsc-intl:+'`
 *
 * The international variant includes ICU i18n library and necessary data
 * allowing to use e.g. `Date.toLocaleString` and `String.localeCompare` that
 * give correct results when using with locales other than en-US. Note that
 * this variant is about 6MiB larger per architecture than default.
 */
def jscFlavor = 'io.github.react-native-community:jsc-android:2026004.+'

android {
    ndkVersion rootProject.ext.ndkVersion

    buildToolsVersion rootProject.ext.buildToolsVersion
    compileSdk rootProject.ext.compileSdkVersion

    namespace 'com.budgetiq.android'
    defaultConfig {
        applicationId 'com.budgetiq.android'
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "1.0.0"

        buildConfigField "String", "REACT_NATIVE_RELEASE_LEVEL", "\"${findProperty('reactNativeReleaseLevel') ?: 'stable'}\""
    }
    signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
    }
    buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {
            // Caution! In production, you need to generate your own keystore file.
            // see https://reactnative.dev/docs/signed-apk-android.
            signingConfig signingConfigs.debug
            def enableShrinkResources = findProperty('android.enableShrinkResourcesInReleaseBuilds') ?: 'false'
            shrinkResources enableShrinkResources.toBoolean()
            minifyEnabled enableMinifyInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
            def enablePngCrunchInRelease = findProperty('android.enablePngCrunchInReleaseBuilds') ?: 'true'
            crunchPngs enablePngCrunchInRelease.toBoolean()
        }
    }
    packagingOptions {
        jniLibs {
            def enableLegacyPackaging = findProperty('expo.useLegacyPackaging') ?: 'false'
            useLegacyPackaging enableLegacyPackaging.toBoolean()
        }
    }
    androidResources {
        ignoreAssetsPattern '!.svn:!.git:!.ds_store:!*.scc:!CVS:!thumbs.db:!picasa.ini:!*~'
    }
}

// Apply static values from `gradle.properties` to the `android.packagingOptions`
// Accepts values in comma delimited lists, example:
// android.packagingOptions.pickFirsts=/LICENSE,**/picasa.ini
["pickFirsts", "excludes", "merges", "doNotStrip"].each { prop ->
    // Split option: 'foo,bar' -> ['foo', 'bar']
    def options = (findProperty("android.packagingOptions.$prop") ?: "").split(",");
    // Trim all elements in place.
    for (i in 0..<options.size()) options[i] = options[i].trim();
    // `[] - ""` is essentially `[""].filter(Boolean)` removing all empty strings.
    options -= ""

    if (options.length > 0) {
        println "android.packagingOptions.$prop += $options ($options.length)"
        // Ex: android.packagingOptions.pickFirsts += '**/SCCS/**'
        options.each {
            android.packagingOptions[prop] += it
        }
    }
}

dependencies {
    // The version of react-native is set by the React Native Gradle Plugin
    implementation("com.facebook.react:react-android")

    def isGifEnabled = (findProperty('expo.gif.enabled') ?: "") == "true";
    def isWebpEnabled = (findProperty('expo.webp.enabled') ?: "") == "true";
    def isWebpAnimatedEnabled = (findProperty('expo.webp.animated') ?: "") == "true";

    if (isGifEnabled) {
        // For animated gif support
        implementation("com.facebook.fresco:animated-gif:${expoLibs.versions.fresco.get()}")
    }

    if (isWebpEnabled) {
        // For webp support
        implementation("com.facebook.fresco:webpsupport:${expoLibs.versions.fresco.get()}")
        if (isWebpAnimatedEnabled) {
            // Animated webp support
            implementation("com.facebook.fresco:animated-webp:${expoLibs.versions.fresco.get()}")
        }
    }

    if (hermesEnabled.toBoolean()) {
        implementation("com.facebook.react:hermes-android")
    } else {
        implementation jscFlavor
    }
}
````

## File: app/(tabs)/DashboardScreen.jsx
````javascript
import { useNavigation } from "expo-router";
import { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/iq.png";
import ExpenseIncome from "../../components/Charts/ExpenseIncome";
import CostEarnList from "../../components/CostEarnList";
import Button from "../../components/UI/Button";
import {
  useGetAllCategoriesWithSumQuery,
  useGetSpecificTransactionRecentQuery,
} from "../../redux/services/api";
import * as SecureStore from "expo-secure-store";
import { useFocusEffect } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getCurrencyCode as getStoredCurrencyCode } from "../../utils/secureStore";

const currencySymbols = {
  usd: "$",
  gbp: "£",
  aud: "A$",
  nzd: "NZ$",
  eur: "€",
};

const DashboardScreen = () => {
  const { tab } = useLocalSearchParams();
  const reduxCurrencyCode = useSelector((state) => state?.user?.currencyCode);
  const [storedCurrencyCode, setStoredCurrencyCode] = useState(null);

  // --- STATE ---
  const [type, setType] = useState("expenses");
  const [expense, setExpense] = useState("expenses");
  const [limit] = useState(1000);
  const [value, setValue] = useState("month");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "This Month", value: "month" },
    { label: "This Week", value: "week" },
    { label: "This Year", value: "year" },
  ]);
  const [savedCategories, setSavedCategories] = useState([]);

  useEffect(() => {
    if (tab) {
      setExpense(tab);
      setType(tab);
    }
  }, [tab]);

  // --- API QUERIES ---
  const { data: allCategoriesWithSum, refetch: refetchCategories } =
    useGetAllCategoriesWithSumQuery(
      { type, time: value, savedCategory: savedCategories },
      { refetchOnMountOrArgChange: true }
    );

  const { data: specificTransactionRecent, refetch: refetchRecent } = // ✅ added refetchRecent
    useGetSpecificTransactionRecentQuery(
      { type, limit },
      { refetchOnMountOrArgChange: true }
    );

  const currencyFromApi = specificTransactionRecent?.result?.[0]?.currency;

  useEffect(() => {
    const loadCurrency = async () => {
      const stored = await getStoredCurrencyCode();
      setStoredCurrencyCode(stored);
    };
    loadCurrency();
  }, []);

  const activeCurrencyCode = (
    currencyFromApi ||
    reduxCurrencyCode ||
    storedCurrencyCode ||
    "usd"
  ).toString().toLowerCase();

  // --- FETCH SAVED CATEGORIES + REFETCH BOTH ON FOCUS ---
  useFocusEffect(
    useCallback(() => {
      const fetchSavedCategories = async () => {
        try {
          const storedCategories = await SecureStore.getItemAsync(
            type === "expenses"
              ? "selectedExpenseCategories"
              : "selectedIncomeCategories"
          );
          const categories = JSON.parse(storedCategories || "[]");
          setSavedCategories(categories);
          refetchCategories();
          refetchRecent(); // ✅ refetch recent transactions too
        } catch (error) {}
      };

      fetchSavedCategories();
    }, [type, value])
  );

  // --- TRANSFORM DATA ---
  const transformedSpecificTransactionRecent =
    specificTransactionRecent?.result?.map((tx) => {
      const txCurrencyCode = (tx?.currency || activeCurrencyCode)
        .toString()
        .toLowerCase();
      const symbol = currencySymbols[txCurrencyCode] || "$";
      return {
        transactionId: tx._id,
        name: tx.category?.name || "Unknown",
        icon: tx.category?.categoryImage || null,
        amount: `${symbol}${Math.abs(tx.amount)}`,
        userId: tx.userId,
        createdAt: tx.createdAt,
        updatedAt: tx.updatedAt,
        categoryType: tx.category?.type || "unknown",
      };
    }) || [];

  const expenseData =
    allCategoriesWithSum?.result
      .filter((cat) => cat.type === "expenses")
      .map((cat) => {
        const symbol = currencySymbols[activeCurrencyCode] || "$";
        return {
          transactionId: cat._id,
          name: cat.name,
          icon: cat.categoryImage,
          amount: `${symbol}${Math.abs(cat.totalAmount)}`,
          userId: cat.userId,
          createdAt: cat.createdAt,
          updatedAt: cat.updatedAt,
          categoryType: cat.type,
        };
      }) || [];

  const incomeData =
    allCategoriesWithSum?.result
      .filter((cat) => cat.type === "income")
      .map((cat) => {
        const symbol = currencySymbols[activeCurrencyCode] || "$";
        return {
          transactionId: cat._id,
          name: cat.name,
          icon: cat.categoryImage,
          amount: `${symbol}${Math.abs(cat.totalAmount)}`,
          userId: cat.userId,
          createdAt: cat.createdAt,
          updatedAt: cat.updatedAt,
          categoryType: cat.type,
        };
      }) || [];

  // --- RENDER ---
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={logo} />
        <View style={styles.dropdownContainers}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select Time Range"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownBox}
          />
        </View>
      </View>

      {/* Toggle Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            setExpense("expenses");
            setType("expenses");
          }}
          isActive={expense === "expenses"}
        >
          Expenses
        </Button>
        <Button
          onPress={() => {
            setExpense("income");
            setType("income");
          }}
          isActive={expense === "income"}
        >
          Income
        </Button>
      </View>

      {/* Charts & Specific Transaction List */}
      {expense === "expenses" ? (
        <>
          <ExpenseIncome expenseData={expenseData} />
          <View style={{ flex: 1 }}>
            <Text style={styles.listText}>Specific Cost</Text>
            <CostEarnList data={transformedSpecificTransactionRecent} />
          </View>
        </>
      ) : (
        <>
          <ExpenseIncome expenseData={incomeData} />
          <View style={{ flex: 1 }}>
            <Text style={styles.listText}>Specific Earn</Text>
            <CostEarnList data={transformedSpecificTransactionRecent} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownContainers: {
    margin: 10,
    zIndex: 1000,
    width: 130,
  },
  dropdown: {
    borderColor: "#ccc",
  },
  dropdownBox: {
    borderColor: "#ccc",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginVertical: 25,
  },
  listText: {
    fontSize: 22,
    fontWeight: "700",
    padding: 10,
  },
});
````

## File: app/IncrementDecrementAmount.jsx
````javascript
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RemoteSvg from "../components/RemoteSvg";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../Constants/Colors";
import {
  useCreateTransactionMutation,
  useUserGetMeQuery,
  useGetUpdateTransactionMutation,
} from "../redux/services/api";

const FormSkeleton = () => (
  <SafeAreaView style={styles.container}>
    {/* Header Skeleton */}
    <View style={[styles.header, { backgroundColor: "#f0f0f0" }]}>
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: "#e0e0e0",
        }}
      />
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            width: 120,
            height: 20,
            backgroundColor: "#e0e0e0",
            borderRadius: 4,
          }}
        />
      </View>
    </View>

    {/* Input Row Skeleton */}
    <View style={[styles.row, { borderBottomWidth: 0 }]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: "#f0f0f0",
            borderRadius: 4,
          }}
        />
        <View
          style={{
            width: 80,
            height: 16,
            backgroundColor: "#f0f0f0",
            borderRadius: 4,
            marginLeft: 10,
          }}
        />
      </View>
      <View
        style={{
          width: 60,
          height: 24,
          backgroundColor: "#f0f0f0",
          borderRadius: 4,
        }}
      />
    </View>

    {/* Button Skeleton */}
    <View
      style={[styles.button, { backgroundColor: "#f0f0f0", marginTop: "auto" }]}
    />
  </SafeAreaView>
);
const IncrementDecrementAmount = () => {
  const [updateTransaction] = useGetUpdateTransactionMutation();
  const [createTransactions] = useCreateTransactionMutation();
  const navigation = useNavigation();
  const [amount, setAmount] = useState("0");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { id, name, image, categoryType, transactionId, ammount, fromTab } =
    useLocalSearchParams();
  const { data: user, isLoading: userLoading } = useUserGetMeQuery();
  const userId = user?.data?._id;

  const formatDate = (d) =>
    d.toDateString() === new Date().toDateString() ? "Today" : d.toDateString();

  useEffect(() => {
    if (ammount) {
      setAmount(ammount.toString());
    }
  }, [ammount]);

  const handleTransaction = async () => {
    try {
      if (!amount || parseInt(amount) <= 0) {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Error",
          text2: "Amount must be greater than 0",
          visibilityTime: 3000,
          autoHide: true,
        });
        return;
      }

      if (transactionId) {
        await updateTransaction({
          amount: parseInt(amount),
          transactionId,
        });
      } else {
        await createTransactions({
          amount: parseInt(amount),
          categoryId: id,
          userId,
        });
      }

      if (fromTab) {
        router.push(`/(tabs)/DashboardScreen?tab=${fromTab}`);
      } else {
        router.push("/(tabs)/DashboardScreen");
      }
    } catch (error) {
    }
  };
  if (userLoading) {
    return <FormSkeleton />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <View style={styles.headerButtonText}>
            <View style={{ marginRight: 8, backgroundColor: "#E0F2E9" }}>
              {image?.endsWith(".svg") ? (
                <RemoteSvg uri={image} width={40} height={40} />
              ) : (
                <Image
                  source={{ uri: image }}
                  resizeMode="cover"
                  style={styles.iconImage}
                />
              )}
            </View>
            <Text style={styles.headerText}>{name}</Text>
          </View>
        </View>

        {/* Amount */}
        <View style={styles.row}>
          <View style={styles.label}>
            <FontAwesome5 name="money-bill-wave" size={16} />
            <Text style={styles.labelText}> Amount</Text>
          </View>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={(text) => {
              const numericValue = text.replace(/[^0-9]/g, "");
              setAmount(numericValue);
            }}
            keyboardType="numeric"
          />
        </View>

        {/* Date */}
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}

        <TouchableOpacity style={styles.button} onPress={handleTransaction}>
          <Text style={styles.buttonText}>
            {transactionId ? "MODIFY TRANSACTION" : "ADD TRANSACTION"}
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default IncrementDecrementAmount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 24,
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  headerButtonText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelText: {
    marginLeft: 6,
    fontSize: 15,
  },
  button: {
    marginTop: "auto",
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  input: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2E8B57",
    textAlign: "right",
    width: 100,
  },
  iconImage: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  skeletonPulse: {
    backgroundColor: "#f2f2f2",
    borderRadius: 4,
  },
  skeletonHeader: {
    height: 60,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    marginBottom: 24,
    width: "100%",
  },
});
````

## File: app.json
````json
{
  "expo": {
    "name": "MY Money Sorted",
    "slug": "budget-iq",
    "owner": "ayonghosh",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/welcome.png",
    "scheme": "budgetiq",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/images/splashscreen_logo.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.budgetiq.mobile",
      "buildNumber": "1",
      "infoPlist": {
        "NSPhotoLibraryUsageDescription": "This app needs access to your photo library to let you select and upload images.",
        "NSCameraUsageDescription": "This app needs access to your camera to take photos.",
        "ITSAppUsesNonExemptEncryption": false
      }
    },
    "android": {
      "package": "com.budgetiq.android",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/welcome.png",
        "backgroundColor": "#ffffff"
      },
      "permissions": [
        "com.android.vending.BILLING"
      ],
      "edgeToEdgeEnabled": true,
      "softwareKeyboardLayoutMode": "pan"
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/welcome.png"
    },
    "plugins": [
      "expo-router",
      "expo-secure-store",
      "@react-native-community/datetimepicker",
      "expo-font",
      "expo-web-browser"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "revenueCat": {
        "androidApiKey": "goog_GOWSNEmjgZmORVchBnzQmvDfZhf"
      },
      "router": {},
      "eas": {
        "projectId": "40dcfc09-84fb-470e-834a-d88412200f63"
      }
    }
  }
}
````

## File: app/AccountInformation.jsx
````javascript
import { AntDesign, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import * as ImageManipulator from "expo-image-manipulator";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,

  StatusBar,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Colors } from "../Constants/Colors";
import {
  useUserGetMeQuery,
  useUserInfoUpdateMutation,
} from "../redux/services/api";
import { SafeAreaView } from "react-native-safe-area-context";

// 🔧 Compress image before upload
const compressImage = async (uri) => {
  try {
    const result = await ImageManipulator.manipulateAsync(
      uri,
      [{ resize: { width: 800 } }],
      { compress: 0.6, format: ImageManipulator.SaveFormat.JPEG },
    );
    return result.uri;
  } catch {
    return uri; // fallback
  }
};

const AccountInformation = () => {
  const router = useRouter();
  const { data, refetch } = useUserGetMeQuery();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [userInfoUpdate, { isLoading }] = useUserInfoUpdateMutation();

  // Load user data
  useEffect(() => {
    if (data?.data) {
      setImage(data.data.profileImageUrl || null);
      setName(data.data.fullName || "");
      setEmail(data.data.email || "");
    }
  }, [data]);

  const validateEmail = (text) => {
    setEmail(text);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(regex.test(text));
  };

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Permission Denied",
        text2: "Permission to access the camera roll is required!",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedUri = result.assets[0].uri;
      setImage(selectedUri);
      await SecureStore.setItemAsync("userImage", selectedUri);
    }
  };

  const handleSaveChanges = async () => {
    try {
      const contactNo = await SecureStore.getItemAsync("userContactNo");
      const storedName = await SecureStore.getItemAsync("userFullName");
      const storedEmail = await SecureStore.getItemAsync("userEmail");

      const finalName = name || storedName || "";
      const finalEmail = email || storedEmail || "";

      const formData = new FormData();
      formData.append(
        "data",
        JSON.stringify({ fullName: finalName, email: finalEmail, contactNo }),
      );

      if (image) {
        const compressedUri = await compressImage(image);
        const extensionMatch = /\.(\w+)$/.exec(compressedUri.split("/").pop());
        const extension = extensionMatch ? extensionMatch[1] : "jpg";

        const now = new Date();
        const timestamp = `${now.getFullYear()}${(now.getMonth() + 1)
          .toString()
          .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}_${now
            .getHours()
            .toString()
            .padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now
              .getSeconds()
              .toString()
              .padStart(2, "0")}`;

        const sanitizedUserName = finalName.replace(/\s+/g, "_");
        const filename = `${sanitizedUserName}_${timestamp}.${extension}`;
        const type = `image/${extension}`;

        formData.append("file", {
          uri: compressedUri,
          name: filename,
          type,
        });
      }

      await userInfoUpdate(formData).unwrap();
      await SecureStore.setItemAsync("userFullName", finalName);
      await SecureStore.setItemAsync("userEmail", finalEmail);
      refetch();
      router.replace("/SettingScreen");
    } catch {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Upload Failed",
        text2: "Please try again or use a smaller image.",
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent={false}
        backgroundColor="#fff"
        barStyle="dark-content"
      />

      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
      >
        {/* Profile Image */}
        <View style={styles.imageWrapper}>
          <Image
            source={
              image ? { uri: image } : require("../assets/images/avater.png")
            }
            style={styles.image}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.uploadIcon} onPress={pickImage}>
            <Ionicons name="camera" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Name Input */}
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <AntDesign name="user" size={20} color="#555" />
            <TextInput
              style={styles.in}
              value={name}
              onChangeText={setName}
              placeholder="Name"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <AntDesign name="mail" size={20} color="#555" />
            <TextInput
              style={[styles.in, { color: "#999" }]}
              value={email}
              onChangeText={validateEmail}
              placeholder="example@gmail.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              editable={false}
            />
          </View>
          {!isEmailValid && (
            <Text style={styles.errorText}>Please enter a valid email</Text>
          )}
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={[
            styles.button,
            (isLoading || !isEmailValid) && { opacity: 0.6 },
          ]}
          onPress={handleSaveChanges}
          disabled={isLoading || !isEmailValid}
        >
          <Text style={styles.buttonText}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AccountInformation;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 120,
  },
  imageWrapper: {
    position: "relative",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  uploadIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    padding: 4,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  inputContainer: {
    width: "85%",
    marginTop: 20,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 50,
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  in: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 100,
    alignItems: "center",
    width: "85%",
    marginTop: 30,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
````

## File: app/AccountVerification.jsx
````javascript
import { useLocalSearchParams, useRouter } from "expo-router";
import { use, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { Colors } from "../Constants/Colors";
import { useVerifyRegistrationMutation } from "../redux/services/api";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice"; //

import { useSignInMutation } from "../redux/services/api";
import { useResentOtpMutation } from "../redux/services/api";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const AccountVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);
  const router = useRouter();
  const { email } = useLocalSearchParams();
  const { password } = useLocalSearchParams();
  const dispatch = useDispatch(); // ✅ Add this

  const [oTP, { isLoading }] = useVerifyRegistrationMutation();
  const [resentOtp] = useResentOtpMutation();
  const [signIn] = useSignInMutation();
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResendOtp = async () => {
    if (!email) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Email is missing. Cannot resend OTP.",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    setCountdown(60);
    setIsResendDisabled(true);

    try {
      const response = await resentOtp({ email }).unwrap();
      Toast.show({
        type: "success",
        position: "top",
        text1: "Success",
        text2: "A new OTP has been sent to your email.",
        visibilityTime: 3000,
        autoHide: true,
      });
    } catch (e) {
      const message = e?.data?.message || "Unable to resend OTP.";
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: message,
        visibilityTime: 3000,
        autoHide: true,
      });

      // ✅ Allow user to retry after failure
      setIsResendDisabled(false);
    }
  };

  // Handle OTP verification and sign in
  const handleVerify = async () => {
    if (otp.join("").length < 6) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Invalid OTP",
        text2: "Please enter the complete 6-digit code.",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    if (!email || !password) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Missing Data",
        text2: "Email or password is missing. Please restart the process.",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    try {
      const verifyResponse = await oTP({
        email: email,
        tokenCode: otp.join(""),
      }).unwrap();
      // ✅ 3. Proceed to Sign-in
      try {
        const signInResponse = await signIn({
          email: email,
          password: password,
        }).unwrap();
        const token = signInResponse?.data?.accessToken;
        if (token) {
          dispatch(setToken(token));
          router.replace({ pathname: "/Currency", params: { next: "/LoginScreen" } });
        } else {
          Toast.show({
            type: "error",
            position: "top",
            text1: "Sign-in Error",
            text2: "Token is missing. Please try again.",
            visibilityTime: 3000,
            autoHide: true,
          });
        }
      } catch (signInError) {
        const message =
          signInError?.data?.message || "Sign-in failed. Please try again.";
        Toast.show({
          type: "error",
          position: "top",
          text1: "Error",
          text2: message,
          visibilityTime: 3000,
          autoHide: true,
        });

      }
    } catch (err) {
      const statusCode = err?.data?.err?.statusCode || err?.status || 500;
      const message = err?.data?.message || "Failed to verify OTP.";

      Toast.show({
        type: "error",
        position: "top",
        text1: "❌ Error", // Add emoji or custom title
        text2: message,
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
      >
        <View style={styles.container}>
          <Text style={styles.title}>Account Verification</Text>
          <Text style={styles.subTitle}>
            To verify you account, please enter the verification code that you
            have received in your email {email}
          </Text>

          <View style={styles.inputContainer}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.input}
                keyboardType="numeric"
                maxLength={1}
                value={otp[index]}
                onChangeText={(text) => handleOtpChange(index, text)}
                onKeyPress={({ nativeEvent: { key } }) =>
                  handleKeyPress(index, key)
                }
                selectTextOnFocus
              />
            ))}
          </View>

          <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
            <Text style={styles.verifyText}>Send</Text>
          </TouchableOpacity>

          <View style={styles.resendCode}>
            <Text>
              {isResendDisabled
                ? `Resend OTP in ${countdown}s`
                : "Didn't get code?"}
            </Text>

            <TouchableOpacity
              onPress={handleResendOtp}
              disabled={isResendDisabled}
            >
              <Text style={{ color: isResendDisabled ? "gray" : "#1BA26E" }}>
                Resend OTP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AccountVerification;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 100,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subTitle: {
    marginVertical: 20,
    fontSize: 16,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 5,
  },
  input: {
    width: 45,
    height: 50,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
  },
  countdown: {
    marginBottom: 10,
    color: "gray",
  },
  resendButton: {
    borderRadius: 5,
    marginBottom: 20,
  },
  resendText: {
    color: "white",
  },
  verifyButton: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 5,
    width: "100%",
  },
  verifyText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  resendCode: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
});
````

## File: redux/services/api.js
````javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://budgetiq.net/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token; // ✅ get token from Redux
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/users/sign-up",
        method: "POST",
        body: data,
      }),
    }),
    verifyRegistration: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-registration",
        method: "POST",
        body: data,
      }),
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),
    }),
    logIn: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: data,
      }),
    }),
    iqBuddy: builder.mutation({
      query: (data) => ({
        url: "/iqbuddy",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),
    verifyCode: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-code",
        method: "POST",
        body: data,
      }),
    }),
    resentOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/resend-otp",
        method: "POST",
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (data) => ({
        url: "/users/delete-user",
        method: "DELETE",
        body: data,
      }),
    }),
    userInfoUpdate: builder.mutation({
      query: (data) => ({
        url: "/users/update-user",
        method: "PATCH",
        body: data,
      }),
    }),
    userGetMe: builder.query({
      query: () => ({
        url: "/users/get-me",
        method: "GET",
      }),
      transformResponse: (response) => {
        if (response.success && response.data?.profileImageUrl) {
          return {
            ...response,
            data: {
              ...response.data,
              profileImageUrl: `${response.data.profileImageUrl}`,
            },
          };
        }
        return response;
      },
    }),

    getAllMemberShipPlan: builder.query({
      query: () => ({
        url: "/membership-plan",
        method: "GET",
      }),
    }),
    getMembership: builder.mutation({
      query: (id) => ({
        url: `/membership/${id}`, // dynamic URL
        method: "POST",
      }),
    }),
    getSpecificTransactionRecent: builder.query({
      query: ({ type, limit }) => ({
        url: `/transaction/recent-cost?type=${type}&limit=${limit}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        // Some environments return { result: [...] }, others return { data: { result: [...] } }
        const rawResult =
          (Array.isArray(response?.result) && response.result) ||
          (Array.isArray(response?.data?.result) && response.data.result) ||
          [];

        const resultWithFullImage = rawResult.map((tx) => ({
          ...tx,
          category: {
            ...tx.category,
            categoryImage: tx.category?.categoryImage
              ? `${tx.category.categoryImage}`
              : null,
          },
        }));

        // Preserve original shape as much as possible, but guarantee `result`
        return { ...(response || {}), result: resultWithFullImage };
      },
    }),

    getAllCategories: builder.query({
      query: (type) => ({
        url: `/category?type=${type}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        const resultWithFullImage = response.result.map((cat) => ({
          ...cat,
          categoryImage: `${cat.categoryImage}`, // prepend server
        }));
        return { ...response, result: resultWithFullImage };
      },
    }),
    getAllCategoriesWithSum: builder.query({
      query: ({ type, time, savedCategory } = {}) => {
        const params = new URLSearchParams();
        if (type) params.append("type", type);
        if (time) params.append("time", time);

        // Handle savedCategory array
        if (savedCategory && Array.isArray(savedCategory)) {
          // Option 1: encode as JSON string
          params.append("savedCategory", JSON.stringify(savedCategory));

          // Option 2: multiple params (uncomment if your backend expects this)
          // savedCategory.forEach(id => params.append("savedCategory", id));
        }

        const queryString = params.toString();
        return {
          url: `/category/with-sum${queryString ? `?${queryString}` : ""}`,
          method: "GET",
        };
      },
      transformResponse: (response) => {
        const resultWithFullImage = response.result.map((cat) => ({
          ...cat,
          categoryImage: `${cat.categoryImage}`,
        }));
        return { ...response, result: resultWithFullImage };
      },
    }),

    createTransaction: builder.mutation({
      query: (data) => ({
        url: "/transaction/create",
        method: "POST",
        body: data,
      }),
    }),
    getPrivacyPolicy: builder.query({
      query: () => ({
        url: "/policy-term/policy",
        method: "GET",
      }),
    }),
    getTermsAndConditions: builder.query({
      query: () => ({
        url: "/policy-term/terms",
        method: "GET",
      }),
    }),
    getMessageWithTotalTransaction: builder.query({
      query: () => ({
        url: "/motivational-message/message",
        method: "GET",
      }),
    }),
    getUpdateTransaction: builder.mutation({
      query: (data) => ({
        url: `/transaction/update`,
        method: "PATCH",
        body: data, // data contains { amount, transactionId }
      }),
    }),
    getReviewTheApp: builder.mutation({
      query: (data) => ({
        url: "/review/create",
        method: "POST",
        body: data,
      }),
    }),
    currency: builder.mutation({
      query: (data) => ({
        url: "/users/choose-currency",
        method: "POST",
        body: data,
      }),
    }),
    createPayment: builder.mutation({
      query: (data) => ({
        url: "/payment/app-payment-init",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useVerifyRegistrationMutation,
  useIqBuddyMutation,
  useSignInMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useVerifyCodeMutation,
  useResentOtpMutation,
  useDeleteUserMutation,
  useUserInfoUpdateMutation,
  useUserGetMeQuery,
  useGetAllMemberShipPlanQuery,
  useGetMembershipMutation,
  useGetAllCategoriesQuery,
  useGetAllCategoriesWithSumQuery,
  useCreateTransactionMutation,
  useGetSpecificTransactionRecentQuery,
  useGetPrivacyPolicyQuery,
  useGetTermsAndConditionsQuery,
  useGetMessageWithTotalTransactionQuery,
  useLazyGetMessageWithTotalTransactionQuery,
  useGetUpdateTransactionMutation,
  useGetReviewTheAppMutation,
  useCurrencyMutation,
  useCreatePaymentMutation,
} = api;
````

## File: app/SignUpScreen.jsx
````javascript
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Colors } from "../Constants/Colors";
import { useSignUpMutation } from "../redux/services/api";

const SignUpScreen = () => {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateField = (field, value) => {
    let errorMsg = "";

    switch (field) {
      case "fullName":
        if (!value.trim()) errorMsg = "Full name is required.";
        else if (value.trim().length < 3) errorMsg = "At least 3 characters.";
        else if (/^\d+$/.test(value)) errorMsg = "Name cannot be numbers only.";
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) errorMsg = "Email is required.";
        else if (!emailRegex.test(value)) errorMsg = "Invalid email format.";
        break;

      case "contactNo":
        if (!value.trim()) errorMsg = "Phone number is required.";
        else if (!/^\d+$/.test(value)) errorMsg = "Digits only.";
        else if (value.length < 4) errorMsg = "At least 4 digits.";
        break;

      case "password":
        if (!value) errorMsg = "Password is required.";
        else if (value.length < 6) errorMsg = "At least 6 characters.";
        else if (/\s/.test(value)) errorMsg = "No spaces allowed.";
        break;

      case "confirmPassword":
        if (value !== formData.password) errorMsg = "Passwords do not match.";
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const validateEmail = (text) => {
    handleChange("email", text);
    // Basic email regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(regex.test(text));
  };
  const [signUp, { isLoading, isError, data, error }] = useSignUpMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    password: "",
    confirmPassword: "",
  });
  const validateForm = () => {
    return (
      Object.values(errors).every((err) => !err) &&
      Object.values(formData).every((val) => val.trim() !== "")
    );
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    validateField(field, value);
  };

  const handleSignUp = async () => {
    // ✅ Basic client-side validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.contactNo
    ) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Validation Error",
        text2: "All fields are required.",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Validation Error",
        text2: "Passwords do not match.",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    if (formData.password.length < 6) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Weak Password",
        text2: "Password must be at least 6 characters long.",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    try {
      // ✅ API call
      const response = await signUp({
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        contactNo: formData.contactNo.trim(),
        password: formData.password,
      }).unwrap();
      await SecureStore.setItemAsync("userFullName", formData.fullName);
      await SecureStore.setItemAsync("userEmail", formData.email);
      await SecureStore.setItemAsync("userContactNo", formData.contactNo);

      // ✅ Navigate to verification screen
      router.push({
        pathname: "/AccountVerification",
        params: {
          email: formData.email,
          password: formData.password,
        },
      });
    } catch (err) {
      // ✅ Extract error details
      const statusCode = err?.status || err?.originalStatus;
      const serverMessage = err?.data?.message || "";
      Toast.show({
        type: "error",
        position: "top",
        text1: "Sign Up Failed",
        text2: serverMessage + " Click ResentOtp To get New Otp" || "Invalid input. Please check your data.",
        visibilityTime: 3000,
        autoHide: true,
      });
      if (statusCode === 400) {
        router.push({
          pathname: "/AccountVerification",
          params: {
            email: formData.email,
            password: formData.password,
          },
        });
      }
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          enableOnAndroid
        >
          <View style={styles.container}>
            {/* Title of the screen */}
            <Text style={styles.title}>Sign Up</Text>

            {/* Full Name Input Group */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                value={formData.fullName}
                onChangeText={(value) => handleChange("fullName", value)}
                placeholder="Enter your full name here..."
                placeholderTextColor="#888"
              />
            </View>

            {/* Email Input Group */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={validateEmail}
                placeholder="consultme@gmail.com"
                placeholderTextColor="#888"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Phone Number Input Group */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                placeholderTextColor="#888"
                keyboardType="phone-pad"
                value={formData.contactNo}
                onChangeText={(val) => handleChange("contactNo", val)}
              />
            </View>

            {/* Password Input Group */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={[styles.input, { paddingRight: 40 }]}
                  placeholder="********"
                  placeholderTextColor="#888"
                  secureTextEntry={!showPassword}
                  value={formData.password}
                  onChangeText={(val) => handleChange("password", val)}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{ position: "absolute", right: 10, top: 12 }}
                >
                  <Ionicons
                    name={showPassword ? "eye-off" : "eye"}
                    size={22}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm Password Input Group */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirm Password</Text>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={[styles.input, { paddingRight: 40 }]}
                  placeholder="********"
                  placeholderTextColor="#888"
                  secureTextEntry={!showConfirmPassword}
                  value={formData.confirmPassword}
                  onChangeText={(val) => handleChange("confirmPassword", val)}
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ position: "absolute", right: 10, top: 12 }}
                >
                  <Ionicons
                    name={showConfirmPassword ? "eye-off" : "eye"}
                    size={22}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              style={[
                styles.signUpButton,
                (!validateForm() || isLoading) && { opacity: 0.6 },
              ]}
              onPress={handleSignUp}
              disabled={!validateForm() || isLoading}
            >
              <Text style={styles.signUpButtonText}>
                {isLoading ? "Signing Up..." : "Sign Up"}
              </Text>
            </TouchableOpacity>

            {/* Social Sign-Up Buttons Container */}
            <View style={styles.socialButtonsContainer}>
              {/* Commented out social buttons as in original */}
            </View>

            {/* Login Link */}
            <View style={styles.loginTextContainer}>
              <Text style={styles.loginText}>I have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/LoginScreen")}>
                <Text style={styles.loginLink}>Log in</Text>
              </TouchableOpacity>
            </View>

            {isError && (
              <Text style={{ color: "red", marginTop: 10 }}>
                Signup failed!
              </Text>
            )}
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 30,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: Colors.primary,
    marginBottom: 5,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
  signUpButton: {
    backgroundColor: Colors.primary,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    marginTop: 30,
    width: "60%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  socialButton: {
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginTextContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  loginText: {
    fontSize: 16,
    color: "#555",
  },
  loginLink: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: "bold",
  },
});

export default SignUpScreen;
````

## File: app/(tabs)/SettingScreen.jsx
````javascript
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { Colors } from "../../Constants/Colors";
import {
  useDeleteUserMutation,
  useUserGetMeQuery,
  useGetReviewTheAppMutation,
} from "../../redux/services/api";
import { clearToken } from "../../redux/slices/authSlice";
import { deleteAuthData } from "../../utils/secureStore";
import { removeApiSuccess } from "../../redux/slices/messageSlice";
import { getReviewInfo, setReviewInfo } from "../../utils/secureStore";

const SettingScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [deleteUser] = useDeleteUserMutation();
  const [doReview] = useGetReviewTheAppMutation();

  const [userImage, setUserImage] = useState(null);
  const [userFullName, setUserFullName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const { data } = useUserGetMeQuery();

  const [activeItem, setActiveItem] = useState(null);

  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  useEffect(() => {
    if (data?.data) {
      setUserImage(data?.data?.profileImageUrl);
      setUserFullName(data?.data?.fullName);
      setUserEmail(data?.data?.email);
    }
  }, [data]);

  const handleLogOut = async () => {
    try {
      await deleteAuthData();
      dispatch(clearToken());
      dispatch(removeApiSuccess());
      router.replace("/LoginScreen");
    } catch (e) {}
  };

  const menuItems = [
    {
      name: "Currency",
      icon: <Ionicons name="cash-outline" size={20} color="black" />,
      label: "Currency",
    },
    {
      name: "ExpenseCategories",
      icon: <Ionicons name="git-branch-outline" size={20} color="black" />,
      label: "Expenses Categories",
    },
    {
      name: "IncomeCategories",
      icon: <FontAwesome name="money" size={20} color="black" />,
      label: "Income Categories",
    },
    {
      name: "TermsAndPolicies",
      icon: (
        <Ionicons name="shield-checkmark-outline" size={20} color="black" />
      ),
      label: "Terms & Policies",
    },
    {
      name: "PrivacyPolicy",
      icon: (
        <Ionicons name="shield-checkmark-outline" size={20} color="black" />
      ),
      label: "Privacy Policy",
    },
    {
      name: "ReviewTheApp",
      icon: <AntDesign name="like1" size={20} color="black" />,
      label: "Review The App",
    },
    {
      name: "DeleteAccount",
      icon: <Ionicons name="trash-bin-outline" size={20} color="black" />,
      label: "Delete Account",
    },
  ];

  const handleItemPress = async (item, index) => {
    if (item.name === "Currency") {
      setActiveItem(index);
      router.push({ pathname: "/Currency", params: { next: "back" } });
      return;
    }

    if (item.name === "DeleteAccount") {
      Alert.alert(
        "Confirm Delete",
        "Are you sure you want to delete this account?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Delete",
            style: "destructive",
            onPress: async () => {
              try {
                await deleteUser({}).unwrap();
                dispatch(clearToken());
                dispatch(removeApiSuccess());
                router.push("/SignUpScreen");
              } catch (e) {}
            },
          },
        ],
        { cancelable: true },
      );
      return;
    }

    if (item.name === "ReviewTheApp") {
      const storedReview = await getReviewInfo();
      if (!storedReview) {
        setIsReviewModalVisible(true);
      } else {
        Toast.show({
          type: "info",
          position: "top",
          text1: "You’ve already reviewed the app.",
          text2: "Thank you for your feedback!",
          visibilityTime: 3000,
          autoHide: true,
        });
      }
      return;
    }

    setActiveItem(index);
    navigation.navigate(item.name);
  };

  const handleStarPress = async (rating) => {
    setSelectedRating(rating);
    try {
      await doReview({ star: rating }).unwrap();
      await setReviewInfo({ hasReviewed: true });
      Toast.show({
        type: "success",
        position: "top",
        text1: "Thank you!",
        text2: `You rated us ${rating} star${rating > 1 ? "s" : ""}.`,
        visibilityTime: 3000,
        autoHide: true,
      });

      setIsReviewModalVisible(false); // Close the review modal
    } catch (error) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Something went wrong. Please try again.",
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Account</Text>

      {/* User Info */}
      <TouchableOpacity
        onPress={() => navigation.navigate("AccountInformation")}
        style={styles.profileSection}
      >
        {userImage ? (
          <Avatar.Image size={48} source={{ uri: userImage }} />
        ) : (
          <Avatar.Image
            size={48}
            source={require("../../assets/images/avater.png")}
          />
        )}

        <View style={{ marginLeft: 10 }}>
          <Text style={styles.profileName}>{userFullName}</Text>
          <Text style={styles.profileEmail}>{userEmail}</Text>
        </View>
        <AntDesign
          name="right"
          size={18}
          color="black"
          style={{ marginLeft: "auto" }}
        />
      </TouchableOpacity>

      {/* Menu List */}
      {menuItems.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleItemPress(item, index)}
          key={index}
          style={[
            styles.menuItem,
            activeItem === index ? styles.activeBarColor : {},
          ]}
        >
          {React.cloneElement(item.icon, {
            color: activeItem === index ? "white" : "black",
          })}
          <Text
            style={[
              styles.menuLabel,
              activeItem === index ? { color: "#fff" } : {},
            ]}
          >
            {item.label}
          </Text>
          <AntDesign
            name="right"
            size={18}
            color={activeItem === index ? "white" : "black"}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
      ))}

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
        <Text style={styles.logoutText}>LOG OUT</Text>
      </TouchableOpacity>

      {/* Review Modal */}
      <Modal
        transparent
        animationType="slide"
        visible={isReviewModalVisible}
        onRequestClose={() => setIsReviewModalVisible(false)}
        statusBarTranslucent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Rate the App</Text>
            <View style={styles.starContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity
                  key={star}
                  onPress={() => handleStarPress(star)}
                >
                  <MaterialIcons
                    name={star <= selectedRating ? "star" : "star-border"}
                    size={32}
                    color="#FFD700"
                    style={{ marginHorizontal: 4 }}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <Pressable onPress={() => setIsReviewModalVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 14,
    color: "gray",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  menuLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    marginTop: "auto",
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 100,
    alignItems: "center",
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  activeBarColor: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  starContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  cancelText: {
    color: "#1f2937", // dark gray instead of plain black
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#f3f4f6", // light gray background for a button-like look
    overflow: "hidden", // ensures rounded corners clip content
  },
});
````

## File: package.json
````json
{
  "name": "budget-iq-app",
  "main": "expo-router/entry",
  "version": "1.0.0",
  "scripts": {
    "start": "expo start",
    "reset-project": "node ./scripts/reset-project.js",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "web": "expo start --web",
    "lint": "expo lint"
  },
  "dependencies": {
    "@expo/vector-icons": "^15.0.3",
    "@react-native-community/datetimepicker": "8.4.4",
    "@react-native-community/netinfo": "11.4.1",
    "@react-native-picker/picker": "2.11.1",
    "@react-navigation/bottom-tabs": "^7.3.10",
    "@react-navigation/elements": "^2.3.8",
    "@react-navigation/native": "^7.1.6",
    "@react-navigation/native-stack": "^7.3.10",
    "@react-navigation/stack": "^7.4.8",
    "@reduxjs/toolkit": "^2.8.2",
    "d3-shape": "^3.2.0",
    "expo": "^54.0.33",
    "expo-blur": "~15.0.8",
    "expo-constants": "~18.0.13",
    "expo-dev-client": "~6.0.21",
    "expo-font": "~14.0.11",
    "expo-haptics": "~15.0.8",
    "expo-image": "~3.0.11",
    "expo-image-manipulator": "~14.0.8",
    "expo-image-picker": "~17.0.10",
    "expo-linear-gradient": "~15.0.8",
    "expo-linking": "~8.0.11",
    "expo-router": "~6.0.22",
    "expo-secure-store": "~15.0.8",
    "expo-splash-screen": "~31.0.13",
    "expo-status-bar": "~3.0.9",
    "expo-symbols": "~1.0.8",
    "expo-system-ui": "~6.0.9",
    "expo-web-browser": "~15.0.10",
    "ionicons": "^8.0.9",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-native": "0.81.5",
    "react-native-dropdown-picker": "^5.4.6",
    "react-native-gesture-handler": "~2.28.0",
    "react-native-keyboard-aware-scroll-view": "^0.9.5",
    "react-native-paper": "^5.14.5",
    "react-native-purchases": "^9.12.0",
    "react-native-purchases-ui": "^9.12.0",
    "react-native-reanimated": "~4.1.1",
    "react-native-render-html": "^6.3.4",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.16.0",
    "react-native-svg": "15.12.1",
    "react-native-toast-message": "^2.3.3",
    "react-native-vector-icons": "^10.2.0",
    "react-native-web": "^0.21.0",
    "react-native-webview": "13.15.0",
    "react-native-worklets": "0.5.1",
    "react-redux": "^9.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "@react-native-community/cli": "^18.0.0",
    "@types/react": "~19.1.10",
    "eslint": "^9.25.0",
    "eslint-config-expo": "~10.0.0",
    "expo-module-scripts": "^4.1.10",
    "react-native-svg-transformer": "^1.5.1",
    "typescript": "~5.9.2"
  },
  "private": true
}
````

## File: app/(tabs)/index.jsx
````javascript
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useUserGetMeQuery } from "../../redux/services/api";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import logo from "../../assets/images/iq.png";
import TotalSpentDonutChart from "../../components/Charts/TotalSpentDonutChart";
import {
  api,
  useGetMessageWithTotalTransactionQuery,
  useIqBuddyMutation,
} from "../../redux/services/api";
import { Avatar } from "react-native-paper";

import { selectApiSuccess } from "../../redux/slices/messageSlice";

const Index = () => {
  const router = useRouter();
  const scrollViewRef = useRef();
  const apiSuccess = useSelector(selectApiSuccess);
  const [modalVisible, setModalVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [storedImage, setStoredImage] = useState(null);
  const [motivationalMessage, setMotivationalMessage] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [userImage, setUserImage] = useState(null);
  const [iqBuddy] = useIqBuddyMutation();
  const { data } = useUserGetMeQuery();
  useEffect(() => {
    if (data?.data) {
      setUserImage(data?.data?.profileImageUrl);
    }
  }, [data]);
// AFTER
const {
  data: messageData,
  refetch,
  isLoading: isMessageLoading,
  isFetching: isMessageFetching,
} = useGetMessageWithTotalTransactionQuery();

useEffect(() => {
  // ⏳ Don't evaluate routing while the request is still in-flight
  if (isMessageLoading || isMessageFetching) return;

  // ✅ API has settled — now it's safe to route
  if (apiSuccess === true && messageData?.success === true) {
    setMotivationalMessage(messageData?.message || "");
    setTotalIncome(
      messageData?.data?.totalIncomeAndExpenses?.totalIncome || 0
    );
    setTotalExpenses(
      messageData?.data?.totalIncomeAndExpenses?.totalExpenses || 0
    );
  } else if (apiSuccess === null || apiSuccess === undefined) {
     (apiSuccess);
    router.replace("Subscriptions");
  } else {
     ("Message data not available.");
    router.replace("LoginScreen");
  }
}, [apiSuccess, messageData, isMessageLoading, isMessageFetching]);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage = { text: inputText, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    const messageToSend = inputText;
    setInputText("");
    setIsTyping(true);

    try {
      const response = await iqBuddy({ message: messageToSend }).unwrap();
      const replyMessage = { text: response.result.message, sender: "bot" };

      setMessages((prev) => [...prev, replyMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, there was an error. Please try again.", sender: "bot" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const customChartData = [
    { category: "Groceries", value: 333, color: "#7E49FF", icon: "food" },
    { category: "Car", value: 333, color: "#FF2D55", icon: "car" },
    { category: "Home", value: 333, color: "#1BA26E", icon: "home" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Pressable onPress={() => router.push("AccountInformation")}>
          {userImage ? (
            <Avatar.Image size={48} source={{ uri: userImage }} />
          ) : (
            <Avatar.Image
              size={48}
              source={require("../../assets/images/avater.png")}
            />
          )}
        </Pressable>
      </View>

      <View style={styles.tagLine}>
        <Text style={styles.text}>{motivationalMessage}</Text>
      </View>

      <View style={styles.chartsContainer}>
        <TotalSpentDonutChart
          data={customChartData}
          totalSpent={totalExpenses}
          changeAmount={totalIncome - totalExpenses}
          radius={150}
          strokeWidth={60}
        />
      </View>

      <TouchableOpacity
        style={styles.askButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.askButtonText}>ASK IQ Buddy</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        presentationStyle="overFullScreen"
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.backdrop}>
          <KeyboardAvoidingView
            style={styles.modalRoot}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.modalOverlay}>
              <Pressable style={StyleSheet.absoluteFill} onPress={Keyboard.dismiss} />
              <View style={styles.popupContainer}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>IQ Buddy</Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={styles.closeText}>✕</Text>
                  </TouchableOpacity>
                </View>

                <FlatList
                  ref={scrollViewRef}
                  style={styles.chatContainer}
                  contentContainerStyle={styles.chatContent}
                  data={
                    isTyping
                      ? [...messages, { text: "Bot is typing...", sender: "bot" }]
                      : messages
                  }
                  keyExtractor={(item, index) => `${item.sender}-${index}`}
                  keyboardShouldPersistTaps="handled"
                  nestedScrollEnabled
                  onContentSizeChange={() =>
                    scrollViewRef.current?.scrollToEnd({ animated: true })
                  }
                  renderItem={({ item: msg }) => (
                    <View
                      style={[
                        styles.messageBubble,
                        msg.sender === "user"
                          ? styles.userMessage
                          : styles.botMessage,
                      ]}
                    >
                      <Text style={styles.messageText}>{msg.text}</Text>
                    </View>
                  )}
                />

                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="Message IQ Buddy"
                    style={styles.input}
                    value={inputText}
                    onChangeText={setInputText}
                  />
                  <TouchableOpacity
                    onPress={handleSend}
                    disabled={inputText.trim() === "" || isTyping}
                    style={styles.sendButton}
                  >
                    {isTyping ? (
                      <ActivityIndicator size="small" color="#28a745" />
                    ) : (
                      <Text
                        style={[
                          styles.sendIcon,
                          inputText.trim() === "" && { opacity: 0.3 },
                        ]}
                      >
                        ➤
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  chartsContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  tagLine: {
    backgroundColor: "#B8E2D2",
    padding: 10,
    alignItems: "center",
    marginTop: 25,
    borderRadius: 50,
  },
  text: { fontSize: 16, fontWeight: "bold" },
  askButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: "30%",
    marginLeft: "60%",
  },
  askButtonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalRoot: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  popupContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#28a745",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  modalTitle: { fontSize: 18, fontWeight: "700", color: "#fff" },
  closeText: { fontSize: 18, color: "#fff" },
  chatContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexGrow: 0,
    height: 300,
  },
  chatContent: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  messageBubble: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: "80%",
    marginBottom: 40,
  },
  userMessage: { alignSelf: "flex-end", backgroundColor: "#28a745" },
  botMessage: { alignSelf: "flex-start", backgroundColor: "#5C5C5C" },
  messageText: { color: "#fff" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    backgroundColor: "#f9f9f9",
    marginTop: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    marginRight: 10,
  },
  sendButton: { justifyContent: "center", alignItems: "center", padding: 10 },
  sendIcon: { fontSize: 22, color: "#28a745" },
});
````

## File: app/Subscriptions.jsx
````javascript
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Purchases, { LOG_LEVEL } from "react-native-purchases";
import Toast from "react-native-toast-message";
import { useCreatePaymentMutation } from "../redux/services/api";
import { router } from "expo-router";

const REVENUECAT_GOOGLE_API_KEY =
  Constants.expoConfig?.extra?.revenueCat?.androidApiKey ?? "";

// ─── Theme ────────────────────────────────────────────────────────────────────
const GREEN = {
  900: "#064E3B",
  800: "#065F46",
  700: "#047857",
  600: "#059669",
  500: "#10B981",
  400: "#34D399",
  300: "#6EE7B7",
  200: "#A7F3D0",
  100: "#D1FAE5",
  50:  "#ECFDF5",
};

// ─── Plan metadata ────────────────────────────────────────────────────────────
const PLAN_META = {
  standard_plan: {
    displayName: "Standard",
    tag: "POPULAR",
    period: "/ month",
    membershipPlanId: "monthly_plan",
  },
  premium_plan: {
    displayName: "Premium",
    tag: "BEST VALUE",
    period: "/ year",
    membershipPlanId: "yearly_plan",
  },
};

const ENTITLEMENT_TO_PLAN = {
  monthly_plan: "monthly_plan",
  yearly_plan: "yearly_plan",
  "Standard Android": "monthly_plan",
  "Premium Android": "yearly_plan",
};

const PRODUCT_TO_PLAN = {
  cat_monthly: "monthly_plan",
  cat_yearly: "yearly_plan",
  subscription_monthly: "monthly_plan",
  subscription_yearly: "yearly_plan",
};

const FREE_BENEFITS = [
  "Basic expense tracking",
  "Up to 10 transactions/month",
  "1 account",
  "7-day access",
];

// ─── Extract benefits from a RevenueCat offering ─────────────────────────────
//
// Priority order:
//  1. offering.metadata.benefits  → string[] set in RevenueCat dashboard
//  2. pkg.product.description     → free-text from Google Play Console,
//                                   split on newlines / bullet chars
//  3. Empty array (render nothing)
//
const extractBenefits = (offering, pkg) => {
  // 1. RevenueCat dashboard metadata: { "benefits": ["...", "..."] }
  const metaBenefits = offering?.metadata?.benefits;
  if (Array.isArray(metaBenefits) && metaBenefits.length > 0) {
    return metaBenefits.map((b) => String(b).trim()).filter(Boolean);
  }

  // 2. Google Play Console product description
  const desc = pkg?.product?.description;
  if (desc && desc.trim().length > 0) {
    return desc
      .split(/\n|•|·|‣|▸|➤|★|-(?=\s)/) // common bullet/line separators
      .map((line) => line.replace(/^[\s•·‣▸➤★\-]+/, "").trim())
      .filter((line) => line.length > 2);
  }

  return [];
};

// ─── Toast helpers ────────────────────────────────────────────────────────────
const showSuccess = (message) =>
  Toast.show({ type: "success", text1: "Success", text2: message, position: "top" });

const showError = (message) =>
  Toast.show({ type: "error", text1: "Error", text2: message, position: "top" });

const showInfo = (message) =>
  Toast.show({ type: "info", text1: "Info", text2: message, position: "top" });

// ─── Payload builders ─────────────────────────────────────────────────────────
const buildFreePaymentPayload = () => {
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 7);
  return {
    sessionId: `free_session_${Date.now()}`,
    amount: 0,
    currency: "BDT",
    paymentProvider: "free",
    transitionId: `free_txn_${Date.now()}`,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    membershipPlanId: "free_plan",
  };
};

const buildPaymentPayload = (customerInfo, productIdentifier) => {
  const active = customerInfo.entitlements.active;
  const entitlementKey = Object.keys(active)[0];
  const entitlement = active[entitlementKey];
  const productId = entitlement?.productIdentifier ?? productIdentifier;
  const subInfo =
    customerInfo.subscriptionsByProductIdentifier?.[productId] ?? {};

  const membershipPlanId =
    ENTITLEMENT_TO_PLAN[entitlementKey] ??
    PRODUCT_TO_PLAN[productId] ??
    PRODUCT_TO_PLAN[productIdentifier] ??
    "unknown_plan";

  const startDate = new Date();
  const endDate = new Date(startDate);
  if (membershipPlanId === "yearly_plan") {
    endDate.setFullYear(endDate.getFullYear() + 1);
  } else {
    endDate.setMonth(endDate.getMonth() + 1);
  }

  return {
    sessionId: subInfo.storeTransactionId ?? `rc_session_${Date.now()}`,
    amount: productId === "cat_monthly" ? 900 : 3600,
    currency: "BDT",
    paymentProvider: "google_play",
    transitionId: subInfo.storeTransactionId ?? `rc_txn_${Date.now()}`,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    membershipPlanId,
  };
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Subscriptions() {
  const [createPayment] = useCreatePaymentMutation();
  const [plans, setPlans] = useState([]);
  const [offeringMap, setOfferingMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [billingUnavailable, setBillingUnavailable] = useState(false);
  const [selectedOfferingId, setSelectedOfferingId] = useState("free_plan");
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    if (Platform.OS !== "android") {
      setLoading(false);
      return;
    }
    if (!REVENUECAT_GOOGLE_API_KEY) {
      console.warn("RevenueCat Android API key is missing.");
      setLoading(false);
      return;
    }

    const init = async () => {
      Purchases.setLogLevel(LOG_LEVEL.WARN);
      Purchases.configure({ apiKey: REVENUECAT_GOOGLE_API_KEY });
      try {
        const canPay =
          typeof Purchases.canMakePayments === "function"
            ? await Purchases.canMakePayments()
            : true;

        if (!canPay) {
          setBillingUnavailable(true);
          return;
        }

        const result = await Purchases.getOfferings();
        if (!result || Object.keys(result.all).length === 0)
          throw new Error("Empty");

        const map = {};
        const planList = [];

        Object.values(result.all).forEach((offering) => {
          offering.availablePackages.forEach((pkg) => {
            map[offering.identifier] = pkg;
            planList.push({
              offeringId: offering.identifier,
              pkg,
              offering,
              benefits: extractBenefits(offering, pkg),
            });
          });
        });

        setOfferingMap(map);
        setPlans(planList);
      } catch (e) {
        const message = e?.message || "Unable to load offerings";
        if (
          e?.code === "PurchaseNotAllowedError" ||
          message.includes("BILLING_UNAVAILABLE") ||
          message.includes("not allowed to make the purchase")
        ) {
          setBillingUnavailable(true);
        } else {
          console.warn("Failed to fetch offerings:", message);
        }
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handlePurchase = async () => {
    if (selectedOfferingId === "free_plan") {
      try {
        setPurchasing(true);
        const payload = buildFreePaymentPayload();

        const apiResponse = await createPayment(payload).unwrap();
      
        showSuccess("Your 7-day free access has started!");
        router.replace("/");
      } catch (apiError) {
        const msg =
          apiError?.data?.message ||
          apiError?.error ||
          apiError?.message ||
          "Failed to activate free plan.";
        console.error("❌ Free plan error:", apiError);
        showError(msg);
      } finally {
        setPurchasing(false);
      }
      return;
    }

    if (billingUnavailable) {
      showInfo("Google Play Billing is not available on this device/emulator.");
      return;
    }

    const originalPackage = offeringMap[selectedOfferingId];
    if (!originalPackage) return;

    try {
      setPurchasing(true);
      const { customerInfo, productIdentifier } =
        await Purchases.purchasePackage(originalPackage);

      const active = customerInfo.entitlements.active;
      if (Object.keys(active).length > 0) {
        const payload = buildPaymentPayload(customerInfo, productIdentifier);
        try {
          const apiResponse = await createPayment(payload).unwrap();
     
          showSuccess("You're now subscribed!");
          router.replace("/");
        } catch (apiError) {
          const msg =
            apiError?.data?.message ||
            apiError?.error ||
            apiError?.message ||
            "Failed to sync subscription.";
          console.error("❌ Payment sync error:", apiError);
          showInfo(msg);
        }
      }
    } catch (e) {
      if (!e?.userCancelled) {
        console.error("❌ Purchase error:", e?.message);
        showError(e?.message || "Something went wrong.");
      }
    } finally {
      setPurchasing(false);
    }
  };

  const handleRestore = async () => {
    if (billingUnavailable) {
      showInfo("Google Play Billing is not available on this device/emulator.");
      return;
    }
    try {
      setPurchasing(true);
      const customerInfo = await Purchases.restorePurchases();
      const active = customerInfo.entitlements.active;
      if (Object.keys(active).length > 0) {
        showSuccess("Your purchases have been restored.");
      } else {
        showInfo("No previous purchases found.");
      }
    } catch (e) {
      showError(e.message);
    } finally {
      setPurchasing(false);
    }
  };

  // ── All plans: Free first, then RevenueCat ─────────────────────────────────
  const allPlans = [
    {
      offeringId: "free_plan",
      displayName: "Free",
      tag: "7-DAY TRIAL",
      period: "7 days",
      priceString: "",
      benefits: FREE_BENEFITS,
    },
    ...plans.map(({ offeringId, pkg, benefits }) => ({
      offeringId,
      displayName:
        PLAN_META[offeringId]?.displayName ||
        pkg.product.title?.split("(")[0].trim(),
      tag: PLAN_META[offeringId]?.tag ?? null,
      period: PLAN_META[offeringId]?.period ?? "",
      priceString: pkg.product.priceString,
      benefits,
    })),
  ];

  // ── Loading ────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <View style={styles.center}>
        <View style={styles.loadingSpinnerWrap}>
          <ActivityIndicator size="large" color={GREEN[600]} />
        </View>
        <Text style={styles.loadingText}>Loading plans…</Text>
      </View>
    );
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.badgePill}>
          <Text style={styles.badgePillText}>🌿 Go Green</Text>
        </View>
        <Text style={styles.headline}>Pick your plan</Text>
        <Text style={styles.subheadline}>Start free, upgrade anytime</Text>
      </View>

      {/* Cards */}
      <View style={styles.cards}>
        {allPlans.map(({ offeringId, displayName, tag, period, priceString, benefits }) => {
          const isSelected = selectedOfferingId === offeringId;
          return (
            <TouchableOpacity
              key={offeringId}
              activeOpacity={0.88}
              onPress={() => setSelectedOfferingId(offeringId)}
              style={[styles.card, isSelected && styles.cardSelected]}
            >
              {/* Selected glow border accent */}
              {isSelected && <View style={styles.cardAccentBar} />}

              {/* Top row: name + tag + radio */}
              <View style={styles.cardHeader}>
                <View style={styles.cardTitleRow}>
                  <Text style={[styles.cardName, isSelected && styles.cardNameSelected]}>
                    {displayName}
                  </Text>
                  {tag && (
                    <View style={[styles.tag, isSelected && styles.tagSelected]}>
                      <Text style={[styles.tagText, isSelected && styles.tagTextSelected]}>
                        {tag}
                      </Text>
                    </View>
                  )}
                </View>
                <View style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}>
                  {isSelected && <View style={styles.radioInner} />}
                </View>
              </View>

              {/* Price */}
              <View style={styles.priceRow}>
                <Text style={[styles.price, isSelected && styles.priceSelected]}>
                  {priceString}
                </Text>
                <Text style={styles.period}> {period}</Text>
              </View>

              {/* Benefits */}
              {benefits.length > 0 && (
                <>
                  <View style={styles.divider} />
                  <View style={styles.benefitList}>
                    {benefits.map((benefit, i) => (
                      <View key={i} style={styles.benefitRow}>
                        <View style={[styles.checkIcon, isSelected && styles.checkIconSelected]}>
                          <Text style={[styles.checkMark, isSelected && styles.checkMarkSelected]}>
                            ✓
                          </Text>
                        </View>
                        <Text style={[styles.benefitText, isSelected && styles.benefitTextSelected]}>
                          {benefit}
                        </Text>
                      </View>
                    ))}
                  </View>
                </>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* CTA */}
      <TouchableOpacity
        style={[styles.cta, purchasing && styles.ctaDisabled]}
        disabled={purchasing}
        onPress={handlePurchase}
        activeOpacity={0.85}
      >
        {purchasing ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.ctaText}>
            {selectedOfferingId === "free_plan" ? "Start for free" : "Continue"}
          </Text>
        )}
      </TouchableOpacity>

      {/* Restore */}
      <TouchableOpacity
        style={styles.restoreBtn}
        onPress={handleRestore}
        disabled={purchasing}
      >
        <Text style={styles.restoreText}>Restore purchases</Text>
      </TouchableOpacity>

      <Text style={styles.legalText}>
        Subscriptions auto-renew unless cancelled. Cancel anytime in Play Store settings.
      </Text>

      {/* Toast must be rendered at the root level of your app, but if
          your app doesn't already include it, you can place it here */}
      <Toast />
    </ScrollView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: GREEN[50] },
  content: { paddingHorizontal: 20, paddingTop: 56, paddingBottom: 48 },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GREEN[50],
    gap: 16,
  },
  loadingSpinnerWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: GREEN[100],
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: { color: GREEN[700], fontSize: 14, fontWeight: "500" },

  // Header
  header: { marginBottom: 32 },
  badgePill: {
    alignSelf: "flex-start",
    backgroundColor: GREEN[100],
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: GREEN[200],
  },
  badgePillText: { fontSize: 12, fontWeight: "700", color: GREEN[700], letterSpacing: 0.3 },
  headline: {
    fontSize: 32,
    fontWeight: "800",
    color: GREEN[900],
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subheadline: { fontSize: 15, color: GREEN[700] },

  // Cards
  cards: { gap: 14, marginBottom: 28 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1.5,
    borderColor: "#E5F0EB",
    overflow: "hidden",
    shadowColor: GREEN[800],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  cardSelected: {
    borderColor: GREEN[500],
    backgroundColor: "#fff",
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 5,
  },

  // Green left accent bar on selected card
  cardAccentBar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: GREEN[500],
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingLeft: 8, // compensate for accent bar
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  cardName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#374151",
    letterSpacing: -0.2,
  },
  cardNameSelected: { color: GREEN[800] },

  // Tag
  tag: {
    backgroundColor: "#F3F4F6",
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  tagSelected: { backgroundColor: GREEN[600] },
  tagText: { fontSize: 9, fontWeight: "800", color: "#9CA3AF", letterSpacing: 0.8 },
  tagTextSelected: { color: "#fff" },

  // Radio
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
  },
  radioOuterSelected: { borderColor: GREEN[500] },
  radioInner: {
    width: 11,
    height: 11,
    borderRadius: 5.5,
    backgroundColor: GREEN[500],
  },

  // Price
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 4,
    paddingLeft: 8,
  },
  price: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1F2937",
    letterSpacing: -0.5,
  },
  priceSelected: { color: GREEN[700] },
  period: { fontSize: 13, color: "#9CA3AF", fontWeight: "500" },

  // Divider
  divider: {
    height: 1,
    backgroundColor: GREEN[100],
    marginTop: 14,
    marginBottom: 14,
    marginLeft: 8,
  },

  // Benefits
  benefitList: { gap: 10, paddingLeft: 8 },
  benefitRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  checkIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
    flexShrink: 0,
  },
  checkIconSelected: { backgroundColor: GREEN[500] },
  checkMark: { fontSize: 10, fontWeight: "900", color: "#9CA3AF" },
  checkMarkSelected: { color: "#fff" },
  benefitText: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 20,
    flex: 1,
  },
  benefitTextSelected: { color: GREEN[900] },

  // CTA
  cta: {
    backgroundColor: GREEN[600],
    borderRadius: 16,
    paddingVertical: 17,
    alignItems: "center",
    marginBottom: 14,
    minHeight: 56,
    justifyContent: "center",
    shadowColor: GREEN[700],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  ctaDisabled: { opacity: 0.45 },
  ctaText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 0.3,
  },

  // Restore
  restoreBtn: { alignItems: "center", paddingVertical: 10, marginBottom: 14 },
  restoreText: {
    color: GREEN[600],
    fontSize: 13,
    textDecorationLine: "underline",
    fontWeight: "500",
  },

  // Legal
  legalText: {
    textAlign: "center",
    fontSize: 11,
    color: "#9CA3AF",
    lineHeight: 16,
  },
});
````

## File: app/LoginScreen.jsx
````javascript
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { Colors } from "../Constants/Colors";
import {
  useLazyGetMessageWithTotalTransactionQuery,
  useSignInMutation,
} from "../redux/services/api";
import { SafeAreaView } from "react-native-safe-area-context";
import { setToken } from "../redux/slices/authSlice";
import { saveApiSuccess } from "../redux/slices/messageSlice";
import { getToken, saveAuthData } from "../utils/secureStore";

const LoginScreen = () => {
  const [triggerGetMessages, { data }] =
    useLazyGetMessageWithTotalTransactionQuery();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (text) => {
    handleChange("email", text);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(regex.test(text));
  };

  const router = useRouter();
  const navigation = useNavigation();
  const [signIn, { isLoading, isError }] = useSignInMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await signIn(formData).unwrap();

      if (response?.data?.accessToken && formData?.email) {
        await saveAuthData(response?.data?.accessToken, formData?.email);
        dispatch(setToken(response?.data?.accessToken));
        const token = await getToken();
      }

      await runAnotherAsyncFunction();
      router.replace("/(tabs)");
    } catch (error) {
      const message = error?.data?.message || "Something went wrong";
      Toast.show({
        type: "error",
        position: "top",
        text1: "Login Failed",
        text2: message,
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  const runAnotherAsyncFunction = async () => {
    try {
      const result = await triggerGetMessages().unwrap();
      dispatch(saveApiSuccess(result.success));
    } catch (error) {
      dispatch(saveApiSuccess(null));
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          enableOnAndroid
        >
          <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>

            <Image
              source={require("../assets/images/welcome.png")}
              style={styles.logo}
            />
            <Text style={styles.logoText}>MY Money Sorted</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput
              value={formData.email}
              style={styles.input}
              placeholder="consultme@gmail.com"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={validateEmail}
            />

            <Text style={styles.label}>Password</Text>
            <View style={{ position: "relative" }}>
              <TextInput
                value={formData.password}
                style={[styles.input, { paddingRight: 40 }]}
                placeholder="********"
                placeholderTextColor="#888"
                secureTextEntry={!showPassword}
                onChangeText={(text) => handleChange("password", text)}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", right: 10, top: 12 }}
              >
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={22}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.forgot}
              onPress={() => navigation.navigate("ForgerPassword")}
            >
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleLogin()}
              style={[
                styles.loginButton,
                (isLoading ||
                  !isEmailValid ||
                  !formData.email.trim() ||
                  !formData.password.trim()) && { opacity: 0.6 },
              ]}
              disabled={
                isLoading ||
                !isEmailValid ||
                !formData.email.trim() ||
                !formData.password.trim()
              }
            >
              <Text style={styles.loginButtonText}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/SignUpScreen")}>
                <Text style={styles.signupText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
    minHeight: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 8,
  },
  logoText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#00794F",
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#00794F",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#00794F",
    borderRadius: 6,
    padding: 10,
    marginBottom: 16,
    color: "#333",
  },
  forgot: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    color: "#00794F",
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: "#00794F",
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    color: "#00794F",
    fontWeight: "600",
  },
});
````
