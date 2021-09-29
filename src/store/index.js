import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    portfolioPieces:[
      {src:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1622074420814-N7694HZ2JBL642C0ORSH/Icons_SquareDRWwallpaper_02.jpg?format=500w', 
      title:'Detroit Red Wings Wallpaper',
      name:''},
      {src:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1613673442119-WDZ1N1C438IIWDQ7NW99/8285_VL_SpringTraining_CountdownGraphics_Icon.jpg?format=500w', 
      title:'Spring Training Countdown Graphics',
      name:''},
      {src:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1603154441526-ESK401ETU8XDBRBT0EUZ/_Icons_AnimationsMagglioHomeRun.jpg?format=500w', 
      title:'Magglio Home Run Anniversary Rotoscopenimation',
      name:''}]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
