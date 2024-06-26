import React from "react"
import Head from "next/head"
import { CssBaseline } from "@mui/material"
import { CacheProvider } from "@emotion/react"
import { createEmotionCache } from "@/utils"
import { MUIProvider } from "@/providers"
import "slick-carousel/slick/slick.css"
import "./styles/global.css"
import "./styles/react-slick.css"
// import 'slick-carousel/slick/slick-theme.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const App = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || (page => page)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>React Coursespace</title>
      </Head>
      <MUIProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </MUIProvider>
    </CacheProvider>
  )
}

export default App
