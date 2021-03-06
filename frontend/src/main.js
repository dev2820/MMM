import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faSearch,
  faTimes,
  faUpload,
  faAngleLeft,
  faAngleRight,
  faEye,
  faComment,
  faHeart,
  faStar,
  faStarHalf,
  faStarHalfAlt,
  faVolumeMute,
  faVolumeUp,
  faPlay,
  faPause,
  faRedo,
  faWonSign,
  faArrowUp,
  faArrowDown,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
  faStarHalf as farStarHalf,
  faHeart as farHeart,
  faUserCircle as farUserCircle,
  faEye as farEye,
  faCommentDots as farCommentDots
} from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faUserSecret);
library.add(faSearch);
library.add(faTimes);
library.add(faUpload);
library.add(faAngleLeft);
library.add(faAngleRight);
library.add(faEye);
library.add(faComment);
library.add(faHeart);
library.add(farHeart);
library.add(faStar);
library.add(farStar);
library.add(farStarHalf);
library.add(faStarHalf);
library.add(faStarHalfAlt);
library.add(faVolumeMute);
library.add(faVolumeUp);
library.add(farUserCircle);
library.add(farEye);
library.add(faPlay);
library.add(faPause);
library.add(faRedo);
library.add(faWonSign);
library.add(faArrowUp);
library.add(faArrowDown);
library.add(farCommentDots);
library.add(faSpinner);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store).use(router).mount("#app");
