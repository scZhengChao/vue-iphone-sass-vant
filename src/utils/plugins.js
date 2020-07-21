import { 
    Button,
    RadioGroup, 
    Radio,
    List ,
    PullRefresh,
    Cell,
    Icon ,
    Toast,
    Divider
} from 'vant';

import Touch from 'vue-touch-events'
import svgPlugin from '@/assets/icons/index.js'

export default {
    install:function(Vue){
        Vue.use(Button);
        Vue.use(Radio);
        Vue.use(RadioGroup);    
        Vue.use(List);    
        Vue.use(PullRefresh);  
        Vue.use(Cell); 
        Vue.use(Icon ); 
        Vue.use(Toast ); 
        Vue.use(Divider ); 

        
        Vue.use(Touch)
        Vue.use(svgPlugin)
    }
}