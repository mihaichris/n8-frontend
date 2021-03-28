<style global>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  * {
    outline: none;
  }

  html,
  body {
    height: 100%;
    min-height: 100%;
  }

  body {
    margin: 0;
    background-color: #ffd8d8;
    padding: -8px;
  }

  .tb {
    display: table;
    width: 100%;
  }

  .td {
    display: table-cell;
    vertical-align: middle;
  }

  input,
  button {
    color: #fff;
    font-family: Roboto;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
  }

  #search-bar {
    position: relative;
    top: 25%;
    left: 0;
    right: 0;
    width: 2000px;
    padding: 35px;
    margin: -10em auto 0 auto;
    background-color: #ffac75;
    border-radius: 20px;
    box-shadow: 0 10px 40px #ffbb7c, 0 0 0 20px #ffffffeb;
    transform: scale(0.6);
  }

  form {
    height: 96px;
  }

  input[type="text"] {
    width: 100%;
    height: 96px;
    font-size: 60px;
    line-height: 1;
    color: azure;
  }

  input[type="text"]::placeholder {
    color: #e16868;
  }

  #s-cover {
    width: 1px;
    padding-left: 35px;
  }

  button {
    position: relative;
    display: block;
    width: 84px;
    height: 96px;
    cursor: pointer;
  }

  #s-circle {
    position: relative;
    top: -8px;
    left: 0;
    width: 43px;
    height: 43px;
    margin-top: 0;
    border-width: 15px;
      background-color: transparent;
    border-radius: 50%;
    transition: 0.5s ease all;
  }

  button span {
    position: absolute;
    top: 68px;
    left: 43px;
    display: block;
    width: 45px;
    height: 15px;
    background-color: transparent;
    border-radius: 10px;
    transform: rotateZ(52deg);
    transition: 0.5s ease all;
  }

  button span:before,
  button span:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 45px;
    height: 15px;
    background-color: #fff;
    border-radius: 10px;
    transform: rotateZ(0);
    transition: 0.5s ease all;
  }

  #s-cover:hover #s-circle {
    top: -1px;
    width: 67px;
    height: 15px;
    border-width: 0;
    background-color: #fff;
    border-radius: 20px;
  }

  #s-cover:hover span {
    top: 50%;
    left: 56px;
    width: 25px;
    margin-top: -9px;
    transform: rotateZ(0);
  }

  #s-cover:hover button span:before {
    bottom: 11px;
    transform: rotateZ(52deg);
  }

  #s-cover:hover button span:after {
    bottom: -11px;
    transform: rotateZ(-52deg);
  }
  #s-cover:hover button span:before,
  #s-cover:hover button span:after {
    right: -6px;
    width: 40px;
    background-color: #fff;
  }
  .gradient {
    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  }
</style>
