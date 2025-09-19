html:
.rain 
  .left
  .left.center
  .right.center
  .right
  - for (var i=0; i<500; i++ ) 
    .drop



css:
@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 91deg;
}

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #07131c, #305472);
  &:before,
  &:after {
    content: "CLICK & HOLD TO CREATE LIGHTNING";
    font-family: Arial, Helvetica, serif;
    font-size: 12px;
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 18px;
    color: #fff4;
    z-index: -1;
  }
  &:before {
    content: "HOVER SCREEN TO CHANGE WIND SPEED";
    top: 18px;
  }
  &:active:before,
  &:active:after {
    color: #fff0;
    transition: all 0.5s ease 0s;
  }
}

.rain {
  position: absolute;
  width: 120vw;
  height: 100vh;
  cursor: pointer;
  z-index: 0;
  left: -10vw;
  .left,
  .right {
    width: 20vw;
    height: 100vh;
    left: 10vw;
    position: absolute;
    box-sizing: border-box;
    z-index: 2;
  }
  .left {
    &:hover ~ {
      .drop {
        --angle: 105deg;
      }
      .right:after {
        transform: rotate(22deg);
        transition: all 0.5s ease 0s;
      }
    }
  }
  .right {
    left: initial;
    right: 10vw;
    &:after {
      content: "\25B3 \A \25BC";
      position: fixed;
      text-indent: 1px;
      left: calc(50% - 30px);
      top: 45px;
      color: #fff8;
      font-size: 20px;
      border: 2px dashed #fff3;
      border-radius: 100%;
      width: 60px;
      height: 60px;
      box-sizing: border-box;
      padding: 13px 18px;
      text-align: center;
      line-height: 15px;
      transition: all 0.5s ease 0s;
      white-space: pre-wrap;
    }
    &:hover {
      &:after {
        transform: rotate(-22deg);
        transition: all 0.5s ease 0s;
      }
      & ~ .drop {
        --angle: 75deg;
      }
    }
  }
  .right.center {
    right: 30vw;
    &:after {
      display: none;
    }
    &:hover ~ {
      .drop {
        --angle: 85deg;
      }
      .right:after {
        transform: rotate(-12deg);
        transition: all 0.5s ease 0s;
      }
    }
  }
  .left.center {
    left: 30vw;
    &:hover ~ {
      .drop {
        --angle: 95deg;
      }
      .right:after {
        transform: rotate(12deg);
        transition: all 0.5s ease 0s;
      }
    }
  }
  &:active {
    cursor: none;
    animation: lightning 0.1s linear 0s 2, lightning 0.15s ease-out 0.25s 1;
    &:after,
    .right:after {
      opacity: 0;
      transition: all 0.5s ease 0s;
    }
  }
  &:after {
    content: "\21AF";
    position: fixed;
    left: calc(50% - 30px);
    bottom: 45px;
    color: #fff8;
    font-size: 35px;
    border: 2px dashed #fff3;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    padding: 13px 18px;
    text-align: center;
    line-height: 30px;
    transition: all 0.5s ease 0s;
    white-space: pre-wrap;
  }
}

@keyframes lightning {
  50% {
    background: radial-gradient(
        circle at calc(50% - 10vw) -20%,
        #fff4,
        #fff0 20%
      ),
      linear-gradient(180deg, #fff9, #fff3);
  }
}

.drop {
  $drops: 500;
  border: 0.25vmin solid transparent;
  border-bottom-color: #abc2e9;
  position: absolute;
  top: -5vmin;
  --angle: 91deg;
  @for $i from 1 through $drops {
    &:nth-child(#{$i}) {
      opacity: random(90) * 0.01;
      left: random(1200) * 0.1vw;
      border-left-width: random(80) * 0.1vmin;
      animation: fall-#{$i}
        (random(15) * 0.15s)
        (random(25) * -0.5s)
        ease-in
        infinite;
    }
    @keyframes fall-#{$i} {
      #{percentage( random(50) / 500 )} {
        transform: rotate(var(--angle)) translateX(0);
      }
      to {
        transform: rotate(var(--angle)) translateX(calc(100vh + 5vmin));
      }
    }
  }
}
