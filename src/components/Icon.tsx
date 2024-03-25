import React from 'react'
import styled from 'styled-components'

const StyledSvg = styled.svg`
  width: auto;
  height: 1em;
`

export const Icon = {
  Close: () => (
    <StyledSvg width="242" height="242" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M241.208 29.0759L212.924 0.791748L121 92.7156L29.076 0.791748L0.79187 29.0762L92.7157 121L0.791748 212.924L29.076 241.208L121 149.284L212.924 241.208L241.208 212.924L149.284 121L241.208 29.0759Z" fill="currentColor" />
    </StyledSvg>
  ),

  Jackpot: () => (
    <StyledSvg width="200" height="106" viewBox="0 0 200 106" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M200 13H0V93H200V13ZM20.1484 62.502C20.793 60.998 21.1152 59.3939 21.1152 57.6895V39.1914H14.9707V57.6895C14.9707 58.5345 14.806 59.3294 14.4766 60.0742C14.1615 60.819 13.7246 61.4707 13.166 62.0293C12.6074 62.5879 11.9486 63.0319 11.1895 63.3613C10.4447 63.6764 9.64974 63.834 8.80469 63.834C8.26042 63.834 7.72331 63.7624 7.19336 63.6191C6.66341 63.4759 6.16927 63.2682 5.71094 62.9961V69.6133C6.74219 69.8711 7.77344 70 8.80469 70C10.5091 70 12.1061 69.6777 13.5957 69.0332C15.0996 68.3887 16.403 67.515 17.5059 66.4121C18.623 65.2949 19.5039 63.9915 20.1484 62.502ZM44.4043 51.5234V57.6895H32.0723V51.5234C32.0723 50.6784 32.2298 49.8835 32.5449 49.1387C32.8743 48.3796 33.3184 47.7207 33.877 47.1621C34.4355 46.6035 35.0872 46.1667 35.832 45.8516C36.5911 45.5221 37.3932 45.3574 38.2383 45.3574C39.0833 45.3574 39.8783 45.5221 40.623 45.8516C41.3822 46.1667 42.041 46.6035 42.5996 47.1621C43.1582 47.7207 43.5951 48.3796 43.9102 49.1387C44.2396 49.8835 44.4043 50.6784 44.4043 51.5234ZM44.4043 70H50.5703V51.5234C50.5703 49.819 50.248 48.222 49.6035 46.7324C48.959 45.2285 48.0781 43.918 46.9609 42.8008C45.8438 41.6836 44.5332 40.8027 43.0293 40.1582C41.5397 39.5137 39.9427 39.1914 38.2383 39.1914C36.5339 39.1914 34.9297 39.5137 33.4258 40.1582C31.9362 40.8027 30.6328 41.6836 29.5156 42.8008C28.4128 43.918 27.5391 45.2285 26.8945 46.7324C26.25 48.222 25.9277 49.819 25.9277 51.5234V70H32.0723V63.834H44.4043V70ZM75.707 69.6777C77.4831 69.0189 79.0872 68.0736 80.5195 66.8418L77.2539 61.4707C76.3516 62.4447 75.2845 63.1966 74.0527 63.7266C72.821 64.2422 71.5319 64.5 70.1855 64.5C68.8249 64.5 67.5501 64.2422 66.3613 63.7266C65.1725 63.2109 64.1341 62.5091 63.2461 61.6211C62.3581 60.7331 61.6562 59.7018 61.1406 58.5273C60.625 57.3385 60.3672 56.071 60.3672 54.7246C60.3672 53.3783 60.625 52.1107 61.1406 50.9219C61.6562 49.7188 62.3581 48.6803 63.2461 47.8066C64.1341 46.9186 65.1725 46.2168 66.3613 45.7012C67.5501 45.1855 68.8249 44.9277 70.1855 44.9277C71.5319 44.9277 72.821 45.1927 74.0527 45.7227C75.2845 46.2383 76.3516 46.9831 77.2539 47.957L80.5195 42.5859C79.0872 41.3398 77.4831 40.3945 75.707 39.75C73.931 39.0911 72.0905 38.7617 70.1855 38.7617C68.7246 38.7617 67.3138 38.9551 65.9531 39.3418C64.6068 39.7142 63.3392 40.2513 62.1504 40.9531C60.9759 41.6406 59.9017 42.4714 58.9277 43.4453C57.9538 44.4193 57.1159 45.5007 56.4141 46.6895C55.7266 47.8639 55.1895 49.1315 54.8027 50.4922C54.4303 51.8529 54.2441 53.2637 54.2441 54.7246C54.2441 56.1855 54.4303 57.5964 54.8027 58.957C55.1895 60.3034 55.7266 61.571 56.4141 62.7598C57.1159 63.9342 57.9538 65.0085 58.9277 65.9824C59.9017 66.9564 60.9759 67.7943 62.1504 68.4961C63.3392 69.1836 64.6068 69.7135 65.9531 70.0859C67.3138 70.4727 68.7246 70.666 70.1855 70.666C72.0905 70.666 73.931 70.3366 75.707 69.6777ZM84.1074 70H90.2734V63.834L94.9785 57.5391L101.746 70H108.75L99.0176 52.1895L108.75 39.1914H101.746L90.2734 54.5957V39.1914H84.1074V70ZM123.939 57.6895H117.773V45.3574H123.939C124.785 45.3574 125.579 45.5221 126.324 45.8516C127.069 46.1667 127.721 46.6035 128.279 47.1621C128.838 47.7207 129.275 48.3796 129.59 49.1387C129.919 49.8835 130.084 50.6784 130.084 51.5234C130.084 52.3685 129.919 53.1706 129.59 53.9297C129.275 54.6745 128.838 55.3262 128.279 55.8848C127.721 56.4434 127.069 56.8874 126.324 57.2168C125.579 57.5319 124.785 57.6895 123.939 57.6895ZM111.607 70H117.773V63.834H123.939C125.63 63.834 127.219 63.5117 128.709 62.8672C130.213 62.2227 131.523 61.3418 132.641 60.2246C133.758 59.1074 134.639 57.804 135.283 56.3145C135.928 54.8105 136.25 53.2135 136.25 51.5234C136.25 50.3919 136.1 49.3034 135.799 48.2578C135.512 47.2122 135.097 46.2311 134.553 45.3145C134.023 44.3978 133.378 43.5671 132.619 42.8223C131.874 42.0632 131.044 41.4186 130.127 40.8887C129.225 40.3444 128.251 39.929 127.205 39.6426C126.16 39.3418 125.071 39.1914 123.939 39.1914H111.607V70ZM169.486 58.957C169.873 57.5964 170.066 56.1855 170.066 54.7246C170.066 53.2637 169.873 51.8529 169.486 50.4922C169.114 49.1315 168.584 47.8639 167.896 46.6895C167.209 45.515 166.378 44.4408 165.404 43.4668C164.43 42.4928 163.356 41.6621 162.182 40.9746C161.007 40.2871 159.74 39.7572 158.379 39.3848C157.018 38.998 155.607 38.8047 154.146 38.8047C152.686 38.8047 151.275 38.998 149.914 39.3848C148.568 39.7572 147.3 40.2871 146.111 40.9746C144.937 41.6621 143.863 42.4928 142.889 43.4668C141.915 44.4408 141.077 45.515 140.375 46.6895C139.688 47.8639 139.15 49.1315 138.764 50.4922C138.391 51.8529 138.205 53.2637 138.205 54.7246C138.205 56.1855 138.391 57.5964 138.764 58.957C139.15 60.3034 139.688 61.571 140.375 62.7598C141.077 63.9342 141.915 65.0085 142.889 65.9824C143.863 66.9564 144.937 67.7943 146.111 68.4961C147.3 69.1836 148.568 69.7135 149.914 70.0859C151.275 70.4727 152.686 70.666 154.146 70.666C155.607 70.666 157.018 70.4727 158.379 70.0859C159.74 69.7135 161.007 69.1836 162.182 68.4961C163.356 67.7943 164.43 66.9564 165.404 65.9824C166.378 65.0085 167.209 63.9342 167.896 62.7598C168.584 61.571 169.114 60.3034 169.486 58.957ZM163.17 50.9219C163.686 52.1107 163.943 53.3783 163.943 54.7246C163.943 56.071 163.686 57.3385 163.17 58.5273C162.654 59.7018 161.952 60.7331 161.064 61.6211C160.191 62.5091 159.152 63.2109 157.949 63.7266C156.76 64.2422 155.493 64.5 154.146 64.5C152.786 64.5 151.511 64.2422 150.322 63.7266C149.133 63.2109 148.095 62.5091 147.207 61.6211C146.319 60.7331 145.617 59.7018 145.102 58.5273C144.586 57.3385 144.328 56.071 144.328 54.7246C144.328 53.3783 144.586 52.1107 145.102 50.9219C145.617 49.7188 146.319 48.6803 147.207 47.8066C148.095 46.9186 149.133 46.2168 150.322 45.7012C151.511 45.1855 152.786 44.9277 154.146 44.9277C155.493 44.9277 156.76 45.1855 157.949 45.7012C159.152 46.2168 160.191 46.9186 161.064 47.8066C161.952 48.6803 162.654 49.7188 163.17 50.9219ZM179.928 70H186.072V45.3574H195.311V39.1914H170.668V45.3574H179.928V70Z" fill="currentColor" />

    </StyledSvg>
  ),

  Fairness: () => (
    <StyledSvg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M738 312.197L663.854 151.645C669.261 146.743 673.591 140.773 676.568 134.112C679.547 127.45 681.109 120.244 681.155 112.948C681.109 101.107 677.033 89.6339 669.596 80.4159C662.16 71.1979 651.806 64.7836 640.237 62.2286C628.668 59.6735 616.575 61.1294 605.944 66.3572C595.313 71.5848 586.779 80.2727 581.744 90.9919L206.897 186.225C197.651 178.276 185.865 173.895 173.669 173.875C163.088 173.803 152.738 176.966 144.005 182.938C135.273 188.911 128.577 197.408 124.812 207.291C121.048 217.173 120.396 227.972 122.944 238.235C125.492 248.499 131.117 257.74 139.068 264.717L63 429.386L284.064 428.562L208.27 263.894C216.347 256.657 221.922 247.049 224.199 236.449L359.583 202.144V623.695H356.836L173.945 680.507C168.094 682.358 162.98 686.007 159.331 690.936C155.681 695.864 153.684 701.82 153.622 707.95V709.873C153.385 713.731 153.966 717.596 155.328 721.215C156.689 724.832 158.8 728.123 161.522 730.871C164.243 733.617 167.516 735.758 171.123 737.152C174.733 738.546 178.594 739.164 182.457 738.963H618.818C622.657 739.16 626.493 738.55 630.081 737.172C633.669 735.794 636.927 733.678 639.645 730.962C642.362 728.244 644.479 724.99 645.858 721.403C647.239 717.817 647.849 713.982 647.652 710.146V707.95C647.61 701.854 645.653 695.924 642.055 691C638.457 686.075 633.403 682.404 627.605 680.507L444.987 623.695H441.966V184.58L588.062 145.882L593.553 151.645L519.133 312.746C535.567 312.746 722.939 312.197 738 312.197ZM108.311 429.386L173.669 287.771L238.12 428.755L108.311 429.386ZM630.077 174.699L693.788 311.922H565.542L630.077 174.699Z" fill="currentColor" />
      <path d="M323 424C323 506.842 256.068 574 173.5 574C90.9337 574 24 506.842 24 424C188.834 424.004 154.334 424 323 424Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M173.5 534C219.984 534 259.712 504.974 275.66 464C237.538 464 213.197 464 192.506 464C157.802 464.002 133.354 464.002 71.3412 464C87.2895 504.974 127.017 534 173.5 534ZM29.3744 464C25.8715 451.266 24 437.852 24 424C38.7985 424 51.9904 424 63.8667 424C131.6 424.002 156.548 424.002 192.741 424C214.706 424 240.811 424 283.133 424C295.047 424 308.247 424 323 424V424.054C322.996 437.886 321.124 451.282 317.626 464C300.18 527.424 242.262 574 173.5 574C104.74 574 46.8211 527.424 29.3744 464Z" fill="currentColor" />
      <path d="M770 311C770 393.292 703.066 460 620.5 460C537.932 460 471 393.292 471 311C635.833 311.004 601.332 311 770 311Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M620.5 420.267C666.985 420.267 706.712 391.434 722.658 350.733C684.536 350.733 660.197 350.735 639.504 350.735C604.8 350.735 580.352 350.735 518.34 350.735C534.288 391.434 574.015 420.267 620.5 420.267ZM476.374 350.733C472.872 338.084 471 324.76 471 311C485.799 311 498.99 311.002 510.867 311.002C578.6 311.002 603.549 311.002 639.742 311.002C661.704 311.002 687.811 311 730.133 311C742.047 311 755.245 311 770 311V311.054C769.994 324.795 768.124 338.1 764.626 350.733C747.178 413.735 689.26 460 620.5 460C551.738 460 493.82 413.735 476.374 350.733Z" fill="currentColor" />
    </StyledSvg>
  ),

  Refresh: () => (
    <StyledSvg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M712.764 116.921C724.113 105.547 737 95.6469 737 84.0625C737 72.4781 727.588 63 715.943 63H505.378C502.83 63 484.321 63 484.321 84.0625V294.688C484.321 306.272 493.754 315.75 505.378 315.75C517.022 315.75 525.129 304.588 534.099 295.742L592.615 237.187C629.885 281.208 652.584 337.866 652.584 400C652.584 539.644 539.447 652.75 399.905 652.75C260.363 652.75 147.226 539.644 147.226 400C147.226 274.889 238.338 171.052 357.792 151.042V65.9491C191.635 86.5903 63 228.13 63 400C63 586.193 213.849 737 399.905 737C585.961 737 736.81 586.193 736.81 400C736.81 314.486 704.889 236.767 652.437 177.371L712.764 116.921Z" fill="currentColor" />
    </StyledSvg>

  ),

  Info: () => (
    <StyledSvg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M400 733.334C584.095 733.334 733.334 584.095 733.334 400C733.334 215.905 584.095 66.667 400 66.667C215.905 66.667 66.667 215.905 66.667 400C66.667 584.095 215.905 733.334 400 733.334Z" stroke="currentColor" strokeWidth="50" />
      <path d="M337.5 295.833C337.5 261.315 365.483 233.333 400 233.333C434.517 233.333 462.5 261.315 462.5 295.833C462.5 318.748 450.167 338.783 431.78 349.663C415.933 359.036 400 373.256 400 391.666V433.333" stroke="currentColor" strokeWidth="50" strokeLinecap="round" />
      <path d="M400 566.667C418.41 566.667 433.334 551.743 433.334 533.333C433.334 514.924 418.41 500 400 500C381.591 500 366.667 514.924 366.667 533.333C366.667 551.743 381.591 566.667 400 566.667Z" fill="currentColor" />
    </StyledSvg>
  ),

  ExternalLink: () => (
    <StyledSvg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </StyledSvg>
  ),

  ArrowRight: () => (
    <StyledSvg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
    </StyledSvg>
  ),

  ArrowLeft: () => (
    <StyledSvg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
    </StyledSvg>
  ),

  Shuffle: () => (
    <StyledSvg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_438_206)">
        <path d="M-3.90577e-05 600C-3.90577e-05 613.867 4.79996 625.867 14.4 636C24 646.134 36 650.934 50.4 650.401H100C134.133 650.401 166.667 643.734 197.6 630.4C228.533 617.067 254.933 599.2 276.8 576.8C298.667 554.4 316.533 527.734 330.4 496.8C344.267 465.867 350.933 433.6 350.4 400C350.4 358.934 364.8 323.734 393.6 294.4C422.4 265.067 457.867 250.4 500 250.4H600V300C600 311.2 603.2 320.8 609.6 328.8C616 336.8 623.2 342.667 631.2 346.4C639.2 350.134 648.533 351.2 659.2 349.6C669.867 348 678.667 343.467 685.6 336L785.6 236C795.733 225.334 800.533 213.334 800 200C799.467 186.667 794.667 174.934 785.6 164.8L685.6 64.8005C677.6 57.3338 668.533 52.8005 658.4 51.2005C648.267 49.6005 638.933 50.6671 630.4 54.4005C621.867 58.1338 614.667 64.0005 608.8 72.0005C602.933 80.0005 600 89.3338 600 100V150.4H500C466.4 150.4 434.133 157.067 403.2 170.4C372.267 183.734 345.6 201.334 323.2 223.2C300.8 245.067 282.933 271.734 269.6 303.2C256.267 334.667 249.867 366.934 250.4 400C250.4 441.6 235.733 477.067 206.4 506.4C177.067 535.734 141.6 550.401 100 550.401H50.4C36.5333 550.401 24.5333 555.2 14.4 564.8C4.26663 574.4 -0.533372 586.134 -3.90577e-05 600ZM-3.90577e-05 200.8C-3.90577e-05 214.667 4.79996 226.4 14.4 236C24 245.6 36 250.4 50.4 250.4H100C123.467 250.4 145.067 255.467 164.8 265.6C184.533 275.734 201.867 289.6 216.8 307.2C228 273.067 244.533 242.4 266.4 215.2C217.867 172 162.4 150.4 100 150.4H50.4C36.5333 150.4 24.5333 155.467 14.4 165.6C4.26663 175.734 -0.533372 187.467 -3.90577e-05 200.8ZM334.4 586.4C381.867 629.067 437.067 650.401 500 650.401H600V700.8C600 711.467 603.2 721.067 609.6 729.6C616 738.134 623.2 744 631.2 747.2C639.2 750.4 648.533 751.2 659.2 749.6C669.867 748 678.667 743.467 685.6 736L785.6 636C795.733 625.867 800.533 613.867 800 600C799.467 586.134 794.667 574.667 785.6 565.6L685.6 465.6C677.6 457.6 668.533 452.8 658.4 451.2C648.267 449.6 638.933 450.667 630.4 454.4C621.867 458.134 614.667 464.267 608.8 472.801C602.933 481.334 600 490.667 600 500.8V550.401H500C477.067 550.401 455.467 545.6 435.2 536C414.933 526.4 397.867 512.534 384 494.4C372.267 528.534 355.733 559.2 334.4 586.4Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_438_206">
          <rect width="800" height="800" fill="white" />
        </clipPath>
      </defs>
    </StyledSvg>
  ),

  Close2: () => (
    <StyledSvg width="242" height="242" viewBox="0 0 242 242" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M241.208 29.0759L212.924 0.791748L121 92.7156L29.076 0.791748L0.79187 29.0762L92.7157 121L0.791748 212.924L29.076 241.208L121 149.284L212.924 241.208L241.208 212.924L149.284 121L241.208 29.0759Z" fill="currentColor" />
    </StyledSvg>
  ),
}