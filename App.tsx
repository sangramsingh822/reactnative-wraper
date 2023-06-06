import { SafeAreaView, StyleSheet, Text, View,BackHandler, Platform } from 'react-native'
import React, {useRef,useEffect,useState}from 'react'
import { WebView } from 'react-native-webview';
const App = () => {
  const webView = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
      }
    }
  }, []); // INITIALIZE ONLY ONCE


  const HandleBackPressed = () => {
    if (webView.current) {
      webView.current.goBack();
      return true; // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
    }
    return false;
  }
  return (
    <WebView 
    ref={webView}
    source={{ uri: 'http://meraappointment.com/public' }} style={{ flex: 1 }}
    onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)} />
  )
}

export default App

const styles = StyleSheet.create({})