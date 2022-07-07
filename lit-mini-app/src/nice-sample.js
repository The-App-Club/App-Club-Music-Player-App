import { LitElement, html, css } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';
import 'long-press-event';

export class NiceSample extends LitElement {
  static get styles() {
    /* https://github.com/google/material-design-icons/blob/master/font/MaterialIcons-Regular.codepoints */
    /* https://fonts.google.com/icons?selected=Material+Icons+Outlined:play_arrow&icon.query=play */
    return css`
      .phonautograph {
        position: absolute;
        top: 50%;
        width: 10rem;
        height: 22rem;
        /* ここのスケールで大きさ調整 */
        transform: translate(-50%, -50%) scale(1.6);
        left: 50%;
      }

      .power {
        position: absolute;
        top: 10%;
        left: 100%;
        transform: translateX(-75%) translateY(50%);
        height: 1rem;
        width: 0.5rem;
        border-radius: 10px;
        background-color: #151515;
      }

      .frame {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #151515;
        border-radius: 10px;
      }

      .frame::before {
        display: block;
        top: 50%;
        left: 50%;
        transform: translateX(2.5%) translateY(2.5%);
        content: '';
        width: 95%;
        height: 95%;
        background-color: #25323f;
        border-radius: 10px;
      }

      .thumbnail {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-85%);
        object-fit: contain;
        height: 50%;
        max-width: 100%;
        display: block;
        border-radius: 10px;
      }

      .headline {
        position: absolute;
        top: 95px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        height: 18px;
        max-height: 18px;
        color: rgb(255, 255, 255);
        font-size: 0.5rem;
        font-family: 'Times New Roman', Times, serif;
        white-space: nowrap;
        overflow-x: scroll;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .headline::-webkit-scrollbar {
        display: block;
        height: 1px;
      }
      .headline::-webkit-scrollbar-track {
        background: transparent;
      }

      .headline::-webkit-scrollbar-thumb {
        background-color: #ffb847;
        border-right: none;
        border-left: none;
      }

      .display {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-100%);
        width: 85%;
        height: 10rem;
        background-color: #15202b;
        border-radius: 10px;
      }

      .controller {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(10%);
        width: 85%;
        height: 8.9rem;
        background-color: #15202b;
        border-radius: 10px;
        z-index: 1;
      }

      .controller-top {
        position: relative;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 30%;
      }

      .prev {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        top: 10px;
        left: 10px;
      }

      .prev:hover {
        cursor: pointer;
      }

      .prev::before {
        position: absolute;
        top: 0;
        left: 0;
        font-family: 'Material Icons';
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #ededed;
        content: '\\e045';
      }

      .shuffle {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        top: 10px;
        left: 57.5px;
      }

      .shuffle:hover {
        cursor: pointer;
      }

      .shuffle.is-shuffle::before {
        position: absolute;
        top: 0;
        left: 0;
        font-family: 'Material Icons';
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #ededed;
        content: '\\e042';
      }

      .shuffle::before {
        position: absolute;
        top: 0;
        left: 0;
        font-family: 'Material Icons';
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #ededed;
        content: '\\e043';
      }

      .next {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        top: 10px;
        right: 10px;
      }

      .next:hover {
        cursor: pointer;
      }

      .next::before {
        position: absolute;
        top: 0;
        left: 0;
        font-family: 'Material Icons';
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #ededed;
        content: '\\e044';
      }

      .controller-center {
        display: flex;
        width: 100%;
        height: 40%;
      }

      .rewind {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
      }

      .rewind:hover {
        cursor: pointer;
      }

      .rewind::before {
        position: absolute;
        top: 0;
        left: 0;
        font-family: 'Material Icons';
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #ededed;
        content: '\\e020';
      }

      .play {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }

      .play:hover {
        cursor: pointer;
      }

      .play.is-playing::before {
        position: absolute;
        top: 0;
        left: 0;
        font-family: 'Material Icons';
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #ededed;
        content: '\\e034';
      }

      .play::before {
        position: absolute;
        top: 0;
        left: 0;
        font-family: 'Material Icons';
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #ededed;
        content: '\\e037';
      }

      .fast-forward {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
      }

      .fast-forward:hover {
        cursor: pointer;
      }

      .fast-forward::before {
        position: absolute;
        top: 0;
        left: 0;
        font-family: 'Material Icons';
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #ededed;
        content: '\\e01f';
      }

      .controller-bottom {
        display: flex;
        width: 100%;
        height: 30%;
      }

      .volume-down {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        bottom: 10px;
        left: 10px;
      }

      .volume-down:hover {
        cursor: pointer;
      }

      .volume-down::before {
        position: absolute;
        top: 0;
        left: 0;
        font-family: 'Material Icons';
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #ededed;
        content: '\\e15b';
      }

      .volume-up {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        bottom: 10px;
        right: 10px;
      }

      .volume-up:hover {
        cursor: pointer;
      }

      .volume-up::before {
        position: absolute;
        top: 0;
        left: 0;
        font-family: 'Material Icons';
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #ededed;
        content: '\\e145';
      }

      .status.is-playing::before {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translateX(10%) translateY(125%);
        font-family: 'Material Icons';
        width: 2rem;
        height: 2rem;
        display: inline-block;
        font-size: 2rem;
        color: #ededed;
        content: '\\e037';
      }

      .status {
        position: absolute;
        top: 55%;
        left: 0%;
      }

      .status::before {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translateX(10%) translateY(125%);
        font-family: 'Material Icons';
        width: 2rem;
        height: 2rem;
        display: inline-block;
        font-size: 2rem;
        color: #ededed;
        content: '\\e034';
      }

      .time {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-70%) translateY(250%);
        color: #ededed;
        font-size: 0.25rem;
      }

      .elapsed,
      .separator,
      .duration {
        margin-left: 0.1rem;
      }

      .genre {
        position: absolute;
        top: 50%;
        right: 0%;
        transform: translateX(-20%) translateY(340%);
        color: #ededed;
        font-size: 0.5rem;
        /* https://en.wikipedia.org/wiki/Music_genre */
        font-family: 'Times New Roman', Times, serif;
      }

      .play-type::before {
        position: absolute;
        top: 50%;
        right: 0%;
        transform: translateX(-175%) translateY(750%);
        content: '\\e042';
        font-family: 'Material Icons';
        width: 0.5rem;
        height: 0.5rem;
        display: inline-block;
        font-size: 0.5rem;
        color: #ededed;
      }

      .play-type.is-shuffle::before {
        position: absolute;
        top: 50%;
        right: 0%;
        transform: translateX(-175%) translateY(750%);
        content: '\\e043';
        font-family: 'Material Icons';
        width: 0.5rem;
        height: 0.5rem;
        display: inline-block;
        font-size: 0.5rem;
        color: #ededed;
      }

      .timeline {
        position: absolute;
        top: 52.5%;
        left: 50%;
        transform: translateX(-45%) translateY(2500%);
        width: 50%;
        height: 0.15rem;
        border-radius: 10px;
        background: #55566a;
      }

      .bubble {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translateX(0%) translateY(-50%);
        width: 0%;
        height: 0.175rem;
        border-radius: 10px;
        background-color: orange;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
    // https://lit.dev/docs/templates/directives/#ref
    this.bubbleDomRef = createRef();
    this.playDomRef = createRef();
    this.statusDomRef = createRef();
    this.elapsedDomRef = createRef();
    this.durationDomRef = createRef();
    this.fastForwardDomRef = createRef();
    this.rewindDomRef = createRef();
    this.thumbnailDomRef = createRef();
    this.trackInfoList = [
      {
        trackNumber: 1,
        thumbnail: 'https://i.scdn.co/image/ab67616d0000b2730f46d80794891bde2dcbf1a8',
        title: 'あの夢をなぞって',
        genres: 'hiphop',
        artistName: 'YOASOBI',
        url: 'https://p.scdn.co/mp3-preview/7ae268c52e7103cdbe08c4a82317e85b55761c17?cid=968f6862dd684a17969d498a8210a79d',
        duration: 242666,
      },
      {
        trackNumber: 2,
        thumbnail: 'https://i.scdn.co/image/ab67616d0000b2732babb9dbd8f5146112f1bf86',
        title: 'Stuck with U (with Justin Bieber)',
        genres: 'hiphop',
        artistName: 'Ariana Grande',
        url: null,
        duration: 228482,
      },
      {
        trackNumber: 3,
        thumbnail: 'https://i.scdn.co/image/ab67616d0000b2734625864250f6c056b0ba3a8a',
        title: '馬鹿',
        genres: 'hiphop',
        artistName: "I Don't Like Mondays.",
        url: 'https://p.scdn.co/mp3-preview/c66545e5ca675a57f2d8b16e7913571bced50a29?cid=968f6862dd684a17969d498a8210a79d',
        duration: 238405,
      },
      {
        trackNumber: 4,
        thumbnail: 'https://i.scdn.co/image/ab67616d0000b273261a68dc46f0a55def87008f',
        title: '旅路',
        genres: 'hiphop',
        artistName: 'Fujii Kaze',
        url: null,
        duration: 277333,
      },
      {
        trackNumber: 5,
        thumbnail: 'https://i.scdn.co/image/ab67616d0000b2736b45db8b7f28cd0429e85110',
        title: 'Malibu Girl',
        genres: 'hiphop',
        artistName: 'HIRAIDAI',
        url: 'https://p.scdn.co/mp3-preview/9460a7abd1191d633b1806f4ed30c15496521d24?cid=968f6862dd684a17969d498a8210a79d',
        duration: 155267,
      },
    ];
    this.currentAudioDom = null;
    this.currentAudioDomDuraiton = null;
    this.currentAudioDomHeadline = null;
    this.currentAudioDomThumbnail = null;
    this.currentAudioDomGenre = null;
    this.currentTrackInfo = null;
  }

  async setUpAudio() {
    const { trackNumber, thumbnail, title, genres, artistName, url, duration } = { ...this.currentTrackInfo };
    const currentAudioDom = await this.createAudio(url);
    currentAudioDom.addEventListener('loadedmetadata', (e) => {
      this.handleLoadAudioData(e, this.durationDomRef);
    });
    currentAudioDom.addEventListener('timeupdate', (e) => {
      this.handleTimelineUpdate(e, this.bubbleDomRef, this.elapsedDomRef);
    });
    currentAudioDom.addEventListener('ended', (e) => {
      this.handleAudioEnded(e, this.bubbleDomRef, this.statusDomRef, this.playDomRef, this.elapsedDomRef);
    });

    window['currentAudioDom'] = this.currentAudioDom = currentAudioDom;
    this.currentAudioDomHeadline = `${artistName} ${title}`;
    this.currentAudioDomThumbnail = thumbnail;
    this.currentAudioDomGenre = genres;

    this.handleLongPress('fastForward', this.fastForwardDomRef.value, this.currentAudioDom);
    this.handleLongPress('backForward', this.rewindDomRef.value, this.currentAudioDom);

    this.requestUpdate();
  }

  async firstUpdated() {
    this.niceRolling();

    // https://codepen.io/arti360/pen/pyoVqm
    this.currentTrackInfo = this.trackInfoList[0];

    this.setUpAudio();
  }

  formatDateTime(timeSeconds) {
    // https://stackoverflow.com/questions/1322732/convert-seconds-to-hh-mm-ss-with-javascript
    return new Date(timeSeconds * 1000).toISOString().substr(11, 8);
  }

  handleAudioEnded(e, bubbleDomRef, statusDomRef, playDomRef, elapsedDomRef) {
    const bubbleDom = bubbleDomRef.value;
    const statusDom = statusDomRef.value;
    const playDom = playDomRef.value;
    const elapsedDom = elapsedDomRef.value;
    bubbleDom.style.width = `${0}%`;
    elapsedDom.innerText = this.formatDateTime(0);
    playDom.classList.toggle('is-playing');
    statusDom.classList.toggle('is-playing');
  }

  handleTimelineUpdate(e, bubbleDomRef, elapsedDomRef) {
    const bubbleDom = bubbleDomRef.value;
    const elapsedDom = elapsedDomRef.value;
    const targetDom = e.path[0];
    elapsedDom.innerText = this.formatDateTime(targetDom.currentTime);
    const progress = Math.floor((targetDom.currentTime / this.currentAudioDomDuraiton) * 100);
    bubbleDom.style.width = `${progress}%`;
    // console.log('handleTimelineUpdate', this.currentAudioDomDuraiton, targetDom.currentTime, progress);
  }

  handleLoadAudioData(e, durationDomRef) {
    const durationDom = durationDomRef.value;
    const targetDom = e.path[0];
    this.currentAudioDomDuraiton = targetDom.duration;
    durationDom.innerText = this.formatDateTime(targetDom.duration);
  }

  createAudio(targetURL) {
    return new Promise((resolve, reject) => {
      try {
        // https://stackoverflow.com/questions/11203773/how-can-i-get-the-html5-audios-duration-time
        const currentAudioDom = document.createElement('audio');
        currentAudioDom.preload = true;
        currentAudioDom.src = targetURL;
        currentAudioDom.volume = 0.03;
        currentAudioDom.load();

        resolve(currentAudioDom);
      } catch (error) {
        reject(error);
      }
    });
  }

  prevSong(e) {
    e.stopPropagation();

    if (!this.currentAudioDom.paused) {
      this.currentAudioDom.pause();
      const playDom = this.playDomRef.value;
      const statusDom = this.statusDomRef.value;
      playDom.classList.toggle('is-playing');
      statusDom.classList.toggle('is-playing');
    }

    const currentTrackInfoIndex = this.trackInfoList.findIndex((trackInfo) => {
      return trackInfo === this.currentTrackInfo;
    });
    const nextTrackInfoIndex = currentTrackInfoIndex - 1;
    const nextTrackInfo = this.trackInfoList[nextTrackInfoIndex];
    this.currentTrackInfo = nextTrackInfo;
    if (!this.currentTrackInfo) {
      const nextTrackInfo = this.trackInfoList[this.trackInfoList.length - 1];
      this.currentTrackInfo = nextTrackInfo;
    }
    const thumbnailDom = this.thumbnailDomRef.value;
    thumbnailDom.src = this.currentTrackInfo.thumbnail;
    this.setUpAudio();
    // console.log('prevSong', this.currentTrackInfo, currentTrackInfoIndex, this.thumbnailDomRef);
  }

  nextSong(e) {
    e.stopPropagation();

    if (!this.currentAudioDom.paused) {
      this.currentAudioDom.pause();
      const playDom = this.playDomRef.value;
      const statusDom = this.statusDomRef.value;
      playDom.classList.toggle('is-playing');
      statusDom.classList.toggle('is-playing');
    }

    const currentTrackInfoIndex = this.trackInfoList.findIndex((trackInfo) => {
      return trackInfo === this.currentTrackInfo;
    });
    const nextTrackInfoIndex = currentTrackInfoIndex + 1;
    const nextTrackInfo = this.trackInfoList[nextTrackInfoIndex];
    this.currentTrackInfo = nextTrackInfo;
    if (!this.currentTrackInfo) {
      const nextTrackInfo = this.trackInfoList[0];
      this.currentTrackInfo = nextTrackInfo;
    }
    const thumbnailDom = this.thumbnailDomRef.value;
    thumbnailDom.src = this.currentTrackInfo.thumbnail;
    this.setUpAudio();
    // console.log('nextSong', this.currentTrackInfo, currentTrackInfoIndex, this.thumbnailDomRef);
  }

  niceRolling() {
    const headlineDom = this.shadowRoot.querySelector(`.headline`);
    let moveX = 0;

    function marquee() {
      function mod(n, m) {
        return ((n % m) + m) % m;
      }
      moveX++;
      requestAnimationFrame(marquee);
      if (mod(moveX, 60) + 1 === 60) {
        headlineDom.scrollTo(headlineDom.scrollLeft + 10, 0);
        if (
          Math.ceil(Array.from(headlineDom.getClientRects())[0].width + headlineDom.scrollLeft + 1) >
          headlineDom.scrollWidth
        ) {
          headlineDom.scrollTo(0, 0);
        }
      }
    }
    marquee();
  }

  play(event) {
    const targetDom = event.target;
    const statusDom = this.shadowRoot.querySelector(`.status`);
    if (targetDom.classList.contains('is-playing')) {
      this.currentAudioDom.pause();
    } else {
      this.currentAudioDom.play();
    }
    targetDom.classList.toggle('is-playing');
    statusDom.classList.toggle('is-playing');
  }

  shuffle(event) {
    event.stopPropagation();
    const targetDom = event.target;
    const playTypeDom = this.shadowRoot.querySelector(`.play-type`);
    targetDom.classList.toggle('is-shuffle');
    playTypeDom.classList.toggle('is-shuffle');
  }

  handleLongPress(mode, targetDom, currentAudioDom) {
    currentAudioDom = null;
    const ua = navigator.userAgent.toLowerCase();
    const isSP = /iphone|ipod|ipad|android/.test(ua);
    const eventStart = isSP ? 'touchstart' : 'mousedown';
    const eventEnd = isSP ? 'touchend' : 'mouseup';
    const eventLeave = isSP ? 'touchmove' : 'mouseleave';

    let count = 0;
    let elapsedTimeSeconds = 0;
    let timer;

    targetDom.addEventListener(eventStart, handleStartPress);
    targetDom.addEventListener(eventEnd, handleEndPress);
    targetDom.addEventListener(eventLeave, handleLeavePress);

    function fastForwardCurrentTime(elapsedTimeSeconds) {
      currentAudioDom = window['currentAudioDom'];
      currentAudioDom.currentTime = currentAudioDom.currentTime + elapsedTimeSeconds;
    }

    function backForwardCurrentTime(elapsedTimeSeconds) {
      currentAudioDom = window['currentAudioDom'];
      if (0 < currentAudioDom.currentTime) {
        currentAudioDom.currentTime = currentAudioDom.currentTime - elapsedTimeSeconds;
      }
    }

    function handleStartPress(e) {
      e.preventDefault();
      timer = setInterval(() => {
        count++;
        elapsedTimeSeconds = count / 100;
        if (mode === 'fastForward') {
          fastForwardCurrentTime(elapsedTimeSeconds);
        }
        if (mode === 'backForward') {
          backForwardCurrentTime(elapsedTimeSeconds);
        }
      }, 10);
    }

    function handleLeavePress(e) {
      e.preventDefault();
      let dom = isSP ? document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY) : targetDom;
      if (!isSP || dom !== targetDom) {
        clearInterval(timer);
        count = 0;
      }
    }

    function handleEndPress(e) {
      e.preventDefault();
      if (count) {
        clearInterval(timer);
        elapsedTimeSeconds = count / 100;
        count = 0;
      }
    }
  }

  fastForward(event) {
    // https://github.com/john-doherty/long-press-event
    // https://stackoverflow.com/questions/2625210/long-press-in-javascript
    const fastForwardDom = this.fastForwardDomRef.value;
    if (this.currentAudioDomDuraiton > this.currentAudioDom.currentTime) {
      this.currentAudioDom.currentTime = this.currentAudioDom.currentTime + 0.3;
    }
  }

  backForward(event) {
    // https://github.com/john-doherty/long-press-event
    // https://stackoverflow.com/questions/2625210/long-press-in-javascript
    const rewindDom = this.rewindDomRef.value;
    if (0 < this.currentAudioDom.currentTime) {
      this.currentAudioDom.currentTime = this.currentAudioDom.currentTime - 0.3;
    }
  }

  volumeUp(event) {
    if (this.currentAudioDom.volume > 0.99) {
      return;
    }
    this.currentAudioDom.volume = this.currentAudioDom.volume + 0.01;
  }

  volumeDown(event) {
    if (this.currentAudioDom.volume < 0.01) {
      return;
    }
    this.currentAudioDom.volume = this.currentAudioDom.volume - 0.01;
  }

  render() {
    /* https://github.com/lit/lit-element/issues/786 */
    return html`
      <div class="phonautograph">
        <div class="power"></div>
        <div class="frame">
          <div class="display">
            <img
              class="thumbnail"
              ${ref(this.thumbnailDomRef)}
              src="https://storage.googleapis.com/b-backet/asset/ethan-robertson-SYx3UCHZJlo-unsplash.jpg"
            />
            <div class="headline">${this.currentAudioDomHeadline}</div>
            <div class="status" ${ref(this.statusDomRef)}></div>
            <div class="time">
              <div class="elapsed" ${ref(this.elapsedDomRef)}>00:00:00</div>
              <div class="separator">/</div>
              <div class="duration" ${ref(this.durationDomRef)}>00:00:00</div>
            </div>
            <div class="genre">${this.currentAudioDomGenre}</div>
            <div class="play-type"></div>
            <div class="timeline">
              <div class="bubble" ${ref(this.bubbleDomRef)}></div>
            </div>
          </div>
          <div class="controller">
            <div class="controller-top">
              <div
                class="prev"
                @click=${(event) => {
                  this.prevSong(event);
                }}
              ></div>
              <div
                class="shuffle"
                @click=${(event) => {
                  this.shuffle(event);
                }}
              ></div>
              <div
                class="next"
                @click=${(event) => {
                  this.nextSong(event);
                }}
              ></div>
            </div>
            <div class="controller-center">
              <div
                class="rewind"
                ${ref(this.rewindDomRef)}
                @click=${(event) => {
                  this.backForward(event);
                }}
              ></div>
              <div
                class="play"
                ${ref(this.playDomRef)}
                @click=${(event) => {
                  this.play(event);
                }}
              ></div>
              <div
                class="fast-forward"
                ${ref(this.fastForwardDomRef)}
                @click=${(event) => {
                  this.fastForward(event);
                }}
              ></div>
            </div>
            <div class="controller-bottom">
              <div
                class="volume-up"
                @click=${(event) => {
                  this.volumeUp(event);
                }}
              ></div>
              <div
                class="volume-down"
                @click=${(event) => {
                  this.volumeDown(event);
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('nice-sample', NiceSample);
