package com.navigation;

import com.facebook.react.ReactActivity;
 import com.facebook.react.ReactActivityDelegate;
 import com.facebook.react.ReactRootView;
 import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "navigation";
    }
     @Override
 protected List<ReactPackage> getPackages() {
   return Arrays.<ReactPackage>asList(
       new MainReactPackage(),         // Note the addtional comma needed for the original last item in the list
       new RNBluetoothManagerPackage() // For https://github.com/solinor/react-native-bluetooth-status
   );
 }
      @Override
 protected ReactActivityDelegate createReactActivityDelegate() {
   return new ReactActivityDelegate(this, getMainComponentName()) {
     @Override
     protected ReactRootView createRootView() {
      return new RNGestureHandlerEnabledRootView(MainActivity.this);
     }
   };
 }
}
