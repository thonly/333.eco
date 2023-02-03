const template = document.createElement("template");

// Reference: https://codepen.io/vandijkstef/pen/wKazOR?editors=0010

template.innerHTML = `
    <link rel="stylesheet" href="components/e3-main/shadow.css">
    <header>
        <h1>Currently in stealth development...</h1>
        <br>
        <a><button></button></a>
    </header>
    <main>
        <tl-kiitos></tl-kiitos>
    </main>
    <footer>
        <tl-robot></tl-robot>
    </footer>
    
    <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 841.9 595.3" style="enable-background:new 0 0 841.9 595.3;"
    xml:space="preserve">
            <defs>
            </defs>
            <rect id="background" width="841.9" height="595.3" />
            <circle id="sun" cx="100" cy="250" r="50" />
            <g id="landcontainer">
                    <g id="land">
                            <path id="mountain_far" class="st1" d="M570,439.5L431,238.6c0.1,0.1,0.1,0.2,0.1,0.2L382.8,169l-1.2,1.7v-0.8l-53.5,73.8
            L186.6,438.7h0.6l-0.6,0.8H570z" />
                            <g id="mountains">
                                    <g id="mountain_big">
                                            <polygon class="st2" points="530.6,75.1 475.9,176.4 334.4,438.5 717.8,438.5" />
                                            <path class="st3" d="M479.9,169c0,0,7.5-8.5,14.7,0c7.2,8.5,27,8.6,36-3.8c9-12.4,14.4,6.3,18,9.8c3.6,3.5,8.5,2.4,13.2-14
                    c4.7-16.3,17.1,7.8,17.1,7.8l-48.3-93.8L479.9,169z" />
                                            <polygon class="st4" points="529.4,76.2 475.9,175.3 334.4,437.4 529.4,437.4" />
                                    </g>
                                    <g id="mountain_small">
                                            <polygon class="st2" points="249.6,211.9 210.8,274.6 110.5,436.6 382.4,436.6" />
                                            <path class="st3" d="M213.6,270c0,0,5.3-5.2,10.4,0c5.1,5.2,19.1,5.3,25.5-2.3c6.4-7.7,10.2,3.9,12.8,6c2.6,2.1,6,1.5,9.4-8.6
                    c3.3-10.1,12.1,4.8,12.1,4.8l-34.3-58L213.6,270z" />
                                            <polygon class="st4" points="248.8,212.6 210.8,273.9 110.5,435.9 248.8,435.9" />
                                    </g>
                            </g>
                            <g id="ground_7">
                                    <path id="soil" class="st5" d="M112.8,520.1c28.4,8,56.2,20.2,84.4,29.9c13.5,4.7,27.1,7.8,40.9,9.8c11.9,1.7,28.7,3,40.6,1.8
                c31.6-3.1,59.3-12.7,89.7-26.9c0,0,35.1-16.5,71.3,1.7c22.1,11.1,43,25.4,66.2,31.1c16.9,4.1,34.1,4.6,51.2,2.3
                c56.7-7.6,110.3-49.8,167.8-49.8C724.7,520.1,112.8,520.1,112.8,520.1z" />
                                    <g id="grass">
                                            <path class="st6" d="M766,505.1c0,9.2-8.7,16.6-19.4,16.6H96.8c-10.7,0-19.4-7.4-19.4-16.6l0,0c0-9.2,8.7-16.6,19.4-16.6h649.8
                    C757.3,488.5,766,495.9,766,505.1L766,505.1z" />
                                            <path class="st7" d="M96.9,521.7h649.8c10.7,0,19.4-7.4,19.4-16.6H77.4C77.4,514.3,86.1,521.7,96.9,521.7z" />
                                    </g>
                                    <g id="road">
                                            <path class="st8" d="M816.9,462.8c0,15.7-10,28.4-22.4,28.4H47.4C35,491.2,25,478.5,25,462.8l0,0c0-15.7,10-28.4,22.4-28.4h747.1
                    C806.9,434.4,816.9,447.1,816.9,462.8L816.9,462.8z" />
                                            <g>
                                                    <line class="st9" x1="43.4" y1="462.8" x2="100.3" y2="462.8" />
                                                    <line class="st9" x1="143.7" y1="462.8" x2="200.6" y2="462.8" />
                                                    <line class="st9" x1="244" y1="462.8" x2="300.9" y2="462.8" />
                                                    <line class="st9" x1="344.3" y1="462.8" x2="401.2" y2="462.8" />
                                                    <line class="st9" x1="444.6" y1="462.8" x2="501.5" y2="462.8" />
                                                    <line class="st9" x1="544.9" y1="462.8" x2="601.8" y2="462.8" />
                                                    <line class="st9" x1="645.2" y1="462.8" x2="702.1" y2="462.8" />
                                                    <line class="st9" x1="745.5" y1="462.8" x2="802.4" y2="462.8" />
                                            </g>
                                    </g>
                            </g>
                            <g id="trees">
                                    <g class="tree" id="tree_25">
                                            <g>
                                                    <ellipse class="st10" cx="752.1" cy="400" rx="7.2" ry="5.1" />
                                                    <path class="st11" d="M752.1,394.9c-4,0-7.2,2.3-7.2,5.1s3.2,5.1,7.2,5.1V394.9z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="778.7" cy="382.7" rx="7.2" ry="5.1" />
                                                    <path class="st11" d="M778.7,377.6c-4,0-7.2,2.3-7.2,5.1c0,2.8,3.2,5.1,7.2,5.1V377.6z" />
                                            </g>
                                            <g>
                                                    <rect x="770.6" y="407.7" transform="matrix(0.7847 0.6199 -0.6199 0.7847 422.6273 -389.0011)" class="st12" width="1.2" height="12.2" />
                                                    <rect x="770.7" y="407.5" transform="matrix(0.7861 0.6181 -0.6181 0.7861 420.6386 -388.1013)" class="st13" width="0.6" height="12.2" />
                                            </g>
                                            <g>
                                                    <rect x="769.4" y="404.2" transform="matrix(0.7846 0.62 -0.62 0.7846 420.2206 -389.0078)" class="st12" width="1.2" height="12.2" />
                                                    <rect x="769.5" y="404" transform="matrix(0.7861 0.6181 -0.6181 0.7861 418.207 -388.0909)" class="st13" width="0.6" height="12.2" />
                                            </g>
                                            <g>
                                                    <rect x="761.1" y="402.8" transform="matrix(0.632 -0.775 0.775 0.632 -36.6445 740.7395)" class="st12" width="1.2" height="12.2" />
                                                    <rect x="761.2" y="403.1" transform="matrix(0.6308 -0.776 0.776 0.6308 -36.3582 741.97)" class="st13" width="0.6" height="12.2" />
                                            </g>
                                            <g>
                                                    <rect x="765.2" y="405.5" class="st12" width="3.7" height="29.9" />
                                                    <rect x="765.2" y="405.5" class="st13" width="1.8" height="29.9" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="768" cy="393.9" rx="21.7" ry="15.4" />
                                                    <path class="st11" d="M768,378.5c-12,0-21.7,6.9-21.7,15.4c0,8.5,9.7,15.4,21.7,15.4V378.5z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="778.7" cy="405.5" rx="8.6" ry="6.1" />
                                                    <path class="st11" d="M778.7,399.4c-4.8,0-8.6,2.8-8.6,6.1c0,3.4,3.9,6.1,8.6,6.1V399.4z" />
                                            </g>
                                    </g>
                                    <g class="tree" id="tree_24">
                                            <g>
                                                    <rect x="726.7" y="419.4" class="st12" width="3.5" height="15.4" />
                                                    <rect x="726.7" y="419.4" class="st13" width="1.8" height="15.4" />
                                            </g>
                                            <polygon class="st14" points="739.7,425.7 728.5,387.4 717.3,425.7 719.1,425.7 718.3,428.6 738.8,428.6 738,425.7" />
                                            <polygon class="st15" points="728.6,428.6 728.6,387.4 717.4,425.7 719.2,425.7 718.4,428.6" />
                                    </g>
                                    <g class="tree" id="tree_23">
                                            <g>
                                                    <ellipse class="st10" cx="597" cy="405.5" rx="5.9" ry="4.2" />
                                                    <path class="st11" d="M597,401.2c-3.3,0-5.9,1.9-5.9,4.2c0,2.3,2.7,4.2,5.9,4.2V401.2z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="618.9" cy="391.2" rx="5.9" ry="4.2" />
                                                    <path class="st11" d="M618.9,387c-3.3,0-5.9,1.9-5.9,4.2s2.7,4.2,5.9,4.2V387z" />
                                            </g>
                                            <g>
                                                    <rect x="612.3" y="411.8" transform="matrix(0.7846 0.62 -0.62 0.7846 390.4134 -290.138)" class="st12" width="1" height="10.1" />
                                                    <rect x="612.3" y="411.6" transform="matrix(0.7871 0.6168 -0.6168 0.7871 387.4345 -289.1508)" class="st13" width="0.5" height="10.1" />
                                            </g>
                                            <g>
                                                    <rect x="611.3" y="408.9" transform="matrix(0.7846 0.6199 -0.6199 0.7846 388.3602 -290.1176)" class="st12" width="1" height="10.1" />
                                                    <rect x="611.3" y="408.7" transform="matrix(0.7864 0.6177 -0.6177 0.7864 386.2069 -289.3873)" class="st13" width="0.5" height="10.1" />
                                            </g>
                                            <g>
                                                    <rect x="604.4" y="407.8" transform="matrix(0.6326 -0.7745 0.7745 0.6326 -97.4708 620.1169)" class="st12" width="1" height="10.1" />
                                                    <rect x="604.5" y="408" transform="matrix(0.632 -0.7749 0.7749 0.632 -97.5232 620.5903)" class="st13" width="0.5" height="10.1" />
                                            </g>
                                            <g>
                                                    <rect x="607.8" y="410" class="st12" width="3" height="24.7" />
                                                    <rect x="607.8" y="410" class="st13" width="1.5" height="24.7" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="610.1" cy="400.4" rx="17.9" ry="12.7" />
                                                    <path class="st11" d="M610.1,387.7c-9.9,0-17.9,5.7-17.9,12.7c0,7,8,12.7,17.9,12.7V387.7z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="618.9" cy="410" rx="7.1" ry="5.1" />
                                                    <path class="st11" d="M618.9,404.9c-3.9,0-7.1,2.3-7.1,5.1c0,2.8,3.2,5.1,7.1,5.1V404.9z" />
                                            </g>
                                    </g>
                                    <g class="tree" id="tree_22">
                                            <g>
                                                    <ellipse class="st10" cx="588.4" cy="410.8" rx="4.9" ry="3.5" />
                                                    <path class="st11" d="M588.4,407.3c-2.7,0-4.9,1.6-4.9,3.5c0,1.9,2.2,3.5,4.9,3.5V407.3z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="606.6" cy="398.9" rx="4.9" ry="3.5" />
                                                    <path class="st11" d="M606.6,395.4c-2.7,0-4.9,1.6-4.9,3.5c0,1.9,2.2,3.5,4.9,3.5V395.4z" />
                                            </g>
                                            <g>
                                                    <rect x="601.1" y="416" transform="matrix(0.7845 0.6201 -0.6201 0.7845 390.1433 -282.4492)" class="st12" width="0.8" height="8.3" />
                                                    <rect x="601.1" y="415.9" transform="matrix(0.787 0.6169 -0.6169 0.787 387.1905 -281.5167)" class="st13" width="0.4" height="8.3" />
                                            </g>
                                            <g>
                                                    <rect x="600.3" y="413.6" transform="matrix(0.7846 0.62 -0.62 0.7846 388.4338 -282.4305)" class="st12" width="0.8" height="8.3" />
                                                    <rect x="600.3" y="413.5" transform="matrix(0.7861 0.6181 -0.6181 0.7861 386.5813 -281.8287)" class="st13" width="0.4" height="8.3" />
                                            </g>
                                            <g>
                                                    <rect x="594.5" y="412.7" transform="matrix(0.6325 -0.7745 0.7745 0.6325 -104.2288 614.0088)" class="st12" width="0.8" height="8.3" />
                                                    <rect x="594.6" y="412.8" transform="matrix(0.6314 -0.7755 0.7755 0.6314 -104.1164 614.9723)" class="st13" width="0.4" height="8.3" />
                                            </g>
                                            <g>
                                                    <rect x="597.4" y="414.5" class="st12" width="2.5" height="20.4" />
                                                    <rect x="597.4" y="414.5" class="st13" width="1.2" height="20.4" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="599.3" cy="406.6" rx="14.8" ry="10.5" />
                                                    <path class="st11" d="M599.3,396.1c-8.2,0-14.8,4.7-14.8,10.5c0,5.8,6.6,10.5,14.8,10.5V396.1z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="606.6" cy="414.5" rx="5.9" ry="4.2" />
                                                    <path class="st11" d="M606.6,410.3c-3.3,0-5.9,1.9-5.9,4.2c0,2.3,2.6,4.2,5.9,4.2V410.3z" />
                                            </g>
                                    </g>
                                    <g class="tree" id="tree_21">
                                            <g>
                                                    <ellipse class="st10" cx="489.6" cy="411.7" rx="4.9" ry="3.5" />
                                                    <path class="st11" d="M489.6,408.2c-2.7,0-4.9,1.6-4.9,3.5c0,1.9,2.2,3.5,4.9,3.5V408.2z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="507.7" cy="399.8" rx="4.9" ry="3.5" />
                                                    <path class="st11" d="M507.8,396.3c-2.7,0-4.9,1.6-4.9,3.5c0,1.9,2.2,3.5,4.9,3.5V396.3z" />
                                            </g>
                                            <g>
                                                    <rect x="502.3" y="416.9" transform="matrix(0.7845 0.6201 -0.6201 0.7845 369.4299 -220.9849)" class="st12" width="0.8" height="8.3" />
                                                    <rect x="502.3" y="416.8" transform="matrix(0.787 0.6169 -0.6169 0.787 366.7012 -220.3645)" class="st13" width="0.4" height="8.3" />
                                            </g>
                                            <g>
                                                    <rect x="501.4" y="414.5" transform="matrix(0.7845 0.6201 -0.6201 0.7845 367.7522 -220.9771)" class="st12" width="0.8" height="8.3" />
                                                    <rect x="501.5" y="414.4" transform="matrix(0.7862 0.6179 -0.6179 0.7862 365.88 -220.5336)" class="st13" width="0.4" height="8.3" />
                                            </g>
                                            <g>
                                                    <rect x="495.7" y="413.6" transform="matrix(0.6326 -0.7745 0.7745 0.6326 -141.2502 537.7411)" class="st12" width="0.8" height="8.3" />
                                                    <rect x="495.8" y="413.7" transform="matrix(0.6313 -0.7756 0.7756 0.6313 -141.2178 538.78)" class="st13" width="0.4" height="8.3" />
                                            </g>
                                            <g>
                                                    <rect x="498.5" y="415.4" class="st12" width="2.5" height="20.4" />
                                                    <rect x="498.5" y="415.4" class="st13" width="1.2" height="20.4" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="500.4" cy="407.5" rx="14.8" ry="10.5" />
                                                    <path class="st11" d="M500.4,397c-8.2,0-14.8,4.7-14.8,10.5c0,5.8,6.6,10.5,14.8,10.5V397z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="507.7" cy="415.4" rx="5.9" ry="4.2" />
                                                    <path class="st11" d="M507.8,411.2c-3.3,0-5.9,1.9-5.9,4.2c0,2.3,2.6,4.2,5.9,4.2V411.2z" />
                                            </g>
                                    </g>
                                    <g class="tree" id="tree_20">
                                            <g>
                                                    <ellipse class="st10" cx="353.6" cy="372.4" rx="8.1" ry="5.8" />
                                                    <path class="st11" d="M353.6,366.6c-4.5,0-8.1,2.6-8.1,5.8c0,3.2,3.6,5.8,8.1,5.8V366.6z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="383.6" cy="352.8" rx="8.1" ry="5.8" />
                                                    <path class="st11" d="M383.6,347c-4.5,0-8.1,2.6-8.1,5.8c0,3.2,3.6,5.8,8.1,5.8V347z" />
                                            </g>
                                            <g>
                                                    <rect x="374.6" y="381" transform="matrix(0.7844 0.6202 -0.6202 0.7844 321.4766 -149.1128)" class="st12" width="1.4" height="13.8" />
                                                    <rect x="374.6" y="380.8" transform="matrix(0.7854 0.619 -0.619 0.7854 320.4544 -148.9088)" class="st13" width="0.7" height="13.8" />
                                            </g>
                                            <g>
                                                    <rect x="373.2" y="377.1" transform="matrix(0.7844 0.6202 -0.6202 0.7844 318.7203 -149.1045)" class="st12" width="1.4" height="13.8" />
                                                    <rect x="373.3" y="376.9" transform="matrix(0.7854 0.619 -0.619 0.7854 317.7065 -148.8986)" class="st13" width="0.7" height="13.8" />
                                            </g>
                                            <g>
                                                    <rect x="363.7" y="375.5" transform="matrix(0.6318 -0.7752 0.7752 0.6318 -162.2346 423.3036)" class="st12" width="1.4" height="13.8" />
                                                    <rect x="363.9" y="375.8" transform="matrix(0.6304 -0.7762 0.7762 0.6304 -162.4486 424.1362)" class="st13" width="0.7" height="13.8" />
                                            </g>
                                            <g>
                                                    <rect x="368.4" y="378.6" class="st12" width="4.1" height="33.8" />
                                                    <rect x="368.4" y="378.6" class="st13" width="2.1" height="33.8" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="371.5" cy="365.4" rx="24.5" ry="17.4" />
                                                    <path class="st16" d="M371.5,348.1c-13.5,0-24.5,7.8-24.5,17.4s11,17.4,24.5,17.4V348.1z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="383.6" cy="378.6" rx="9.8" ry="6.9" />
                                                    <path class="st11" d="M383.6,371.6c-5.4,0-9.8,3.1-9.8,6.9c0,3.8,4.4,6.9,9.8,6.9V371.6z" />
                                            </g>
                                    </g>
                                    <g class="tree" id="tree_19">
                                            <g>
                                                    <rect x="403.8" y="419.3" class="st12" width="3.5" height="15.4" />
                                                    <rect x="403.8" y="419.3" class="st13" width="1.8" height="15.4" />
                                            </g>
                                            <polygon class="st14" points="416.7,425.5 405.5,387.3 394.3,425.5 396.1,425.5 395.4,428.5 415.8,428.5 415,425.5" />
                                            <polygon class="st15" points="405.6,428.5 405.6,387.3 394.4,425.5 396.2,425.5 395.4,428.5" />
                                    </g>
                                    <g class="tree" id="tree_18">
                                            <g>
                                                    <rect x="372.8" y="419.3" class="st12" width="3.5" height="15.4" />
                                                    <rect x="372.8" y="419.3" class="st13" width="1.8" height="15.4" />
                                            </g>
                                            <polygon class="st14" points="385.7,425.5 374.5,387.3 363.3,425.5 365.1,425.5 364.4,428.5 384.8,428.5 384,425.5" />
                                            <polygon class="st15" points="374.6,428.5 374.6,387.3 363.4,425.5 365.2,425.5 364.4,428.5" />
                                    </g>
                                    <g class="tree" id="tree_17">
                                            <g>
                                                    <rect x="349.5" y="419.7" class="st12" width="3.5" height="15.4" />
                                                    <rect x="349.5" y="419.7" class="st13" width="1.8" height="15.4" />
                                            </g>
                                            <polygon class="st14" points="362.4,426 351.2,387.7 340,426 341.8,426 341.1,428.9 361.5,428.9 360.7,426" />
                                            <polygon class="st15" points="351.3,428.9 351.3,387.7 340.1,426 341.9,426 341.1,428.9" />
                                    </g>
                                    <g class="tree" id="tree_16">
                                            <g>
                                                    <rect x="214.7" y="424.2" transform="matrix(0.8128 -0.5825 0.5825 0.8128 -209.1987 205.3937)" class="st12" width="0.5" height="8.1" />
                                                    <rect x="214.8" y="424.3" transform="matrix(0.8122 -0.5834 0.5834 0.8122 -209.5091 205.8125)" class="st13" width="0.3" height="8.1" />
                                            </g>
                                            <g>
                                                    <rect x="219.1" y="423.6" transform="matrix(0.8942 0.4476 -0.4476 0.8942 214.2293 -53.0547)" class="st12" width="0.5" height="6.5" />
                                                    <rect x="219.1" y="423.5" transform="matrix(0.8953 0.4456 -0.4456 0.8953 213.0974 -52.9952)" class="st13" width="0.3" height="6.5" />
                                            </g>
                                            <g>
                                                    <rect x="216.5" y="418.5" class="st12" width="2.1" height="16.1" />
                                                    <polygon class="st13" points="217.5,418.5 216.5,418.5 216.5,434.6 217.5,434.6 217.5,422.3" />
                                            </g>
                                            <g>
                                                    <polygon class="st14" points="223.3,418.4 217.5,405.2 211.8,418.4 212.7,418.4 212.3,419.4 222.8,419.4 222.4,418.4" />
                                                    <polygon class="st15" points="217.6,419.4 217.6,405.2 211.8,418.4 212.8,418.4 212.4,419.4" />
                                            </g>
                                            <polygon class="st14" points="213.1,422.8 213.1,422.8 210.5,426.2 215.4,426.2" />
                                            <polygon class="st15" points="213.1,422.8 213.1,422.8 210.5,426.2 213.1,426.2" />
                                            <polygon class="st14" points="221.1,419.9 221.1,419.9 219,424.2 222.8,424.2" />
                                            <polygon class="st15" points="221.1,419.9 221.1,419.9 219,424.2 221.1,424.2" />
                                    </g>
                                    <g class="tree" id="tree_15">
                                            <g>
                                                    <ellipse class="st10" cx="91.8" cy="406.3" rx="5.9" ry="4.2" />
                                                    <path class="st11" d="M91.8,402.1c-3.3,0-5.9,1.9-5.9,4.2c0,2.3,2.6,4.2,5.9,4.2V402.1z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="113.6" cy="392.1" rx="5.9" ry="4.2" />
                                                    <path class="st11" d="M113.6,387.9c-3.3,0-5.9,1.9-5.9,4.2s2.6,4.2,5.9,4.2V387.9z" />
                                            </g>
                                            <g>
                                                    <rect x="107" y="412.6" transform="matrix(0.7844 0.6202 -0.6202 0.7844 282.2259 23.3513)" class="st12" width="1" height="10" />
                                                    <rect x="107.1" y="412.5" transform="matrix(0.7856 0.6187 -0.6187 0.7856 281.3101 23.0944)" class="st13" width="0.5" height="10" />
                                            </g>
                                            <g>
                                                    <rect x="106" y="409.8" transform="matrix(0.7844 0.6202 -0.6202 0.7844 280.2212 23.3572)" class="st12" width="1" height="10" />
                                                    <rect x="106.1" y="409.6" transform="matrix(0.7856 0.6187 -0.6187 0.7856 279.3111 23.1022)" class="st13" width="0.5" height="10" />
                                            </g>
                                            <g>
                                                    <rect x="99.1" y="408.6" transform="matrix(0.6317 -0.7752 0.7752 0.6317 -283.9568 229.5808)" class="st12" width="1" height="10" />
                                                    <rect x="99.2" y="408.8" transform="matrix(0.6307 -0.776 0.776 0.6307 -284.3983 230.0186)" class="st13" width="0.5" height="10" />
                                            </g>
                                            <g>
                                                    <rect x="102.5" y="410.8" class="st12" width="3" height="24.6" />
                                                    <rect x="102.5" y="410.8" class="st13" width="1.5" height="24.6" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="104.8" cy="401.3" rx="17.8" ry="12.6" />
                                                    <path class="st11" d="M104.8,388.6c-9.8,0-17.8,5.7-17.8,12.6c0,7,8,12.6,17.8,12.6V388.6z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="113.6" cy="410.8" rx="7.1" ry="5" />
                                                    <path class="st11" d="M113.6,405.8c-3.9,0-7.1,2.3-7.1,5c0,2.8,3.2,5,7.1,5V405.8z" />
                                            </g>
                                    </g>
                                    <g class="tree" id="tree_14">
                                            <g>
                                                    <rect x="75.3" y="424.1" transform="matrix(0.8128 -0.5825 0.5825 0.8128 -235.261 124.1903)" class="st12" width="0.5" height="8.1" />
                                                    <rect x="75.4" y="424.2" transform="matrix(0.8122 -0.5834 0.5834 0.8122 -235.6608 124.4844)" class="st13" width="0.3" height="8.1" />
                                            </g>
                                            <g>
                                                    <rect x="79.7" y="423.5" transform="matrix(0.8942 0.4476 -0.4476 0.8942 199.466 9.3271)" class="st12" width="0.5" height="6.5" />
                                                    <rect x="79.7" y="423.5" transform="matrix(0.8953 0.4456 -0.4456 0.8953 198.476 9.1025)" class="st13" width="0.3" height="6.5" />
                                            </g>
                                            <g>
                                                    <rect x="77.1" y="418.4" class="st12" width="2.1" height="16.1" />
                                                    <polygon class="st13" points="78.1,418.4 77.1,418.4 77.1,434.5 78.1,434.5 78.1,422.2" />
                                            </g>
                                            <g>
                                                    <polygon class="st14" points="83.9,418.3 78.1,405.1 72.4,418.3 73.3,418.3 72.9,419.3 83.4,419.3 83,418.3" />
                                                    <polygon class="st15" points="78.2,419.3 78.2,405.1 72.4,418.3 73.4,418.3 73,419.3" />
                                            </g>
                                            <polygon class="st14" points="73.7,422.8 73.7,422.8 71.1,426.1 76,426.1" />
                                            <polygon class="st15" points="73.7,422.8 73.7,422.8 71.1,426.1 73.7,426.1" />
                                            <polygon class="st14" points="81.7,419.9 81.7,419.9 79.6,424.2 83.4,424.2" />
                                            <polygon class="st15" points="81.7,419.9 81.7,419.9 79.6,424.2 81.7,424.2" />
                                    </g>
                                    <g class="tree" id="tree_13">
                                            <g>
                                                    <ellipse class="st10" cx="45" cy="400.6" rx="7.1" ry="5" />
                                                    <path class="st11" d="M45,395.6c-3.9,0-7.1,2.3-7.1,5c0,2.8,3.2,5,7.1,5V395.6z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="71.2" cy="383.5" rx="7.1" ry="5" />
                                                    <path class="st11" d="M71.2,378.5c-3.9,0-7.1,2.3-7.1,5c0,2.8,3.2,5,7.1,5V378.5z" />
                                            </g>
                                            <g>
                                                    <rect x="63.3" y="408.2" transform="matrix(0.7844 0.6202 -0.6202 0.7844 270.7057 49.6863)" class="st12" width="1.2" height="12" />
                                                    <rect x="63.3" y="408" transform="matrix(0.7852 0.6192 -0.6192 0.7852 270.0678 49.523)" class="st13" width="0.6" height="12" />
                                            </g>
                                            <g>
                                                    <rect x="62.1" y="404.8" transform="matrix(0.7843 0.6203 -0.6203 0.7843 268.34 49.7176)" class="st12" width="1.2" height="12" />
                                                    <rect x="62.1" y="404.6" transform="matrix(0.7855 0.6189 -0.6189 0.7855 267.5147 49.4466)" class="st13" width="0.6" height="12" />
                                            </g>
                                            <g>
                                                    <rect x="53.8" y="403.4" transform="matrix(0.6321 -0.7749 0.7749 0.6321 -297.2369 192.7956)" class="st12" width="1.2" height="12.1" />
                                                    <rect x="53.9" y="403.6" transform="matrix(0.6301 -0.7765 0.7765 0.6301 -298.0532 193.6579)" class="st13" width="0.6" height="12.1" />
                                            </g>
                                            <g>
                                                    <rect x="57.9" y="406.1" class="st12" width="3.6" height="29.5" />
                                                    <rect x="57.9" y="406.1" class="st13" width="1.8" height="29.5" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="60.6" cy="394.6" rx="21.4" ry="15.2" />
                                                    <path class="st11" d="M60.6,379.4c-11.8,0-21.4,6.8-21.4,15.2c0,8.4,9.6,15.2,21.4,15.2V379.4z" />
                                            </g>
                                            <g>
                                                    <ellipse class="st10" cx="71.2" cy="406.1" rx="8.5" ry="6.1" />
                                                    <path class="st11" d="M71.2,400c-4.7,0-8.5,2.7-8.5,6.1c0,3.3,3.8,6.1,8.5,6.1V400z" />
                                            </g>
                                    </g>
                            </g>
                            <g id="buildings">
                                    <g id="house_large">
                                            <g id="chimney_3">
                                                    <rect x="691" y="341.4" class="st17" width="13.1" height="17.7" />
                                                    <rect x="688.7" y="334.3" class="st18" width="18" height="7.1" />
                                            </g>
                                            <path id="roof_5" class="st19" d="M717.4,369.2L717.4,369.2L717.4,369.2c-0.5-0.9-1.3-1.5-2.3-1.9l-47.4-40.2l-47.1,40.5
                    c-0.5,0.3-0.8,0.6-1.2,1l-0.1,0.1l0,0c-0.7,0.8-1.1,1.9-1.1,3c0,2.7,2.2,4.8,4.8,4.8h5.6h79.1h5.6c2.7,0,4.8-2.2,4.8-4.8
                    C718.2,370.9,717.9,370,717.4,369.2z" />
                                            <polygon id="building_7" class="st20" points="707.3,434.8 629.8,434.8 629.8,369.6 668.1,337.9 668.1,337.9 707.3,369.4" />
                                            <rect id="floor_seperate" x="627" y="400.3" class="st18" width="82" height="6.4" />
                                            <g id="windows_5">
                                                    <g class="window" id="window_0_1">
                                                            <rect x="640.8" y="410.9" class="st3" width="14.6" height="17.2" />
                                                            <rect x="642" y="412.3" class="st21" width="12.3" height="14.5" />
                                                            <rect x="640.8" y="419.5" class="st3" width="14.6" height="1.3" />
                                                            <rect x="646.6" y="412.3" class="st3" width="2.4" height="14.5" />
                                                    </g>
                                                    <g class="window" id="window_0_2">
                                                            <rect x="680.5" y="410.9" class="st3" width="14.6" height="17.2" />
                                                            <rect x="681.7" y="412.3" class="st21" width="12.3" height="14.5" />
                                                            <rect x="680.5" y="419.5" class="st3" width="14.6" height="1.3" />
                                                            <rect x="686.3" y="412.3" class="st3" width="2.4" height="14.5" />
                                                    </g>
                                                    <g class="window" id="window_1_1">
                                                            <rect x="641.2" y="383" class="st3" width="14.6" height="17.2" />
                                                            <rect x="642.4" y="384.4" class="st21" width="12.3" height="14.5" />
                                                            <rect x="641.2" y="391.6" class="st3" width="14.6" height="1.3" />
                                                            <rect x="647" y="384.4" class="st3" width="2.4" height="14.5" />
                                                    </g>
                                                    <g class="window" id="window_1_2">
                                                            <rect x="660.7" y="383" class="st3" width="14.6" height="17.2" />
                                                            <rect x="661.8" y="384.4" class="st21" width="12.3" height="14.5" />
                                                            <rect x="660.7" y="391.6" class="st3" width="14.6" height="1.3" />
                                                            <rect x="666.5" y="384.4" class="st3" width="2.4" height="14.5" />
                                                    </g>
                                                    <g class="window" id="window_1_3">
                                                            <rect x="680.5" y="383" class="st3" width="14.6" height="17.2" />
                                                            <rect x="681.7" y="384.4" class="st21" width="12.3" height="14.5" />
                                                            <rect x="680.5" y="391.6" class="st3" width="14.6" height="1.3" />
                                                            <rect x="686.3" y="384.4" class="st3" width="2.4" height="14.5" />
                                                    </g>
                                                    <g class="window" id="window_2">
                                                            <rect x="661.3" y="349.8" class="st3" width="14.6" height="17.2" />
                                                            <rect x="662.4" y="351.1" class="st21" width="12.3" height="14.5" />
                                                            <rect x="661.3" y="358.4" class="st3" width="14.6" height="1.3" />
                                                            <rect x="667" y="351.1" class="st3" width="2.4" height="14.5" />
                                                    </g>
                                            </g>
                                            <g id="door_9">
                                                    <rect x="660.7" y="410.9" class="st3" width="15.3" height="23.9" />
                                                    <rect x="661.8" y="412.3" class="st18" width="12.9" height="22.5" />
                                            </g>
                                            <rect id="upper_seperate" x="654.6" y="367" class="st18" width="28.6" height="4.3" />
                                    </g>
                                    <g id="house_small">
                                            <path id="roof_4" class="st19" d="M587.4,396.4L587.4,396.4L587.4,396.4c-0.4-0.6-1-1.1-1.7-1.4l-35.1-29.7l-34.9,30
                    c-0.3,0.2-0.6,0.5-0.9,0.8l-0.1,0.1l0,0c-0.5,0.6-0.8,1.4-0.8,2.2c0,2,1.6,3.6,3.6,3.6h4.1h58.6h4.1c2,0,3.6-1.6,3.6-3.6
                    C588,397.6,587.8,396.9,587.4,396.4z" />
                                            <polygon id="building_6" class="st0" points="579.9,434.6 522.6,434.6 522.6,396.6 550.9,373.2 550.9,373.2 579.9,396.4" />
                                            <g class="window" id="window_bot">
                                                    <rect x="554.9" y="416.1" class="st3" width="10.8" height="12.8" />
                                                    <rect x="555.8" y="417.1" class="st22" width="9.1" height="10.7" />
                                                    <rect x="554.9" y="422.5" class="st3" width="10.8" height="1" />
                                                    <rect x="559.9" y="417.1" class="st3" width="1.7" height="10.7" />
                                                    <rect x="552.4" y="428.4" class="st19" width="15.2" height="1.1" />
                                            </g>
                                            <g id="door_8">
                                                    <rect x="532.8" y="416.8" class="st3" width="11.3" height="17.7" />
                                                    <rect x="533.7" y="417.9" class="st19" width="9.5" height="16.7" />
                                            </g>
                                            <g class="window" id="window_top_3">
                                                    <g>
                                                            <rect x="545.6" y="388.9" class="st3" width="10.8" height="12.8" />
                                                            <rect x="546.5" y="389.9" class="st22" width="9.1" height="10.7" />
                                                            <rect x="545.6" y="395.2" class="st3" width="10.8" height="1" />
                                                            <rect x="550.6" y="389.9" class="st3" width="1.7" height="10.7" />
                                                    </g>
                                                    <rect x="556.4" y="388.9" class="st19" width="6.6" height="12.8" />
                                                    <rect x="539" y="388.9" class="st19" width="6.6" height="12.8" />
                                            </g>
                                    </g>
                                    <g id="store">
                                            <g id="building_5">
                                                    <rect x="423.9" y="402.3" class="st3" width="52.1" height="26.9" />
                                                    <rect x="422.3" y="429.3" class="st23" width="55.3" height="2.7" />
                                            </g>
                                            <rect id="ground_6" x="420.3" y="431.7" class="st24" width="59.5" height="2.7" />
                                            <g class="window" id="window_19">
                                                    <rect x="426.4" y="402.3" class="st25" width="29.7" height="21.2" />
                                                    <polygon class="st26" points="427.6,422.5 427.6,402.3 426.4,402.3 426.4,423.5 456,423.5 456,422.5" />
                                            </g>
                                            <g id="door_7">
                                                    <rect x="458.5" y="408.1" class="st0" width="15.1" height="21.2" />
                                                    <rect x="460.5" y="419.8" class="st27" width="11.5" height="8.1" />
                                                    <g>
                                                            <rect x="460.5" y="410.1" class="st25" width="11.5" height="8.2" />
                                                            <polygon class="st26" points="461,417.9 461,410.1 460.5,410.1 460.5,418.3 472,418.3 472,417.9	" />
                                                    </g>
                                            </g>
                                            <g id="roof_3">
                                                    <g>
                                                            <path class="st28" d="M420.9,398.2v7.5c0,2,1.6,3.6,3.6,3.6c2,0,3.6-1.6,3.6-3.6v-7.5H420.9z" />
                                                            <path class="st29" d="M428.2,398.2v7.5c0,2,1.6,3.6,3.6,3.6c2,0,3.6-1.6,3.6-3.6v-7.5H428.2z" />
                                                            <path class="st28" d="M435.5,398.2v7.5c0,2,1.6,3.6,3.6,3.6c2,0,3.6-1.6,3.6-3.6v-7.5H435.5z" />
                                                            <path class="st29" d="M442.7,398.2v7.5c0,2,1.6,3.6,3.6,3.6c2,0,3.6-1.6,3.6-3.6v-7.5H442.7z" />
                                                            <path class="st28" d="M450,398.2v7.5c0,2,1.6,3.6,3.6,3.6c2,0,3.6-1.6,3.6-3.6v-7.5H450z" />
                                                            <path class="st29" d="M457.3,398.2v7.5c0,2,1.6,3.6,3.6,3.6c2,0,3.6-1.6,3.6-3.6v-7.5H457.3z" />
                                                            <path class="st28" d="M464.5,398.2v7.5c0,2,1.6,3.6,3.6,3.6c2,0,3.6-1.6,3.6-3.6v-7.5H464.5z" />
                                                            <path class="st29" d="M471.8,398.2v7.5c0,2,1.6,3.6,3.6,3.6c2,0,3.6-1.6,3.6-3.6v-7.5H471.8z" />
                                                    </g>
                                                    <g>
                                                            <path class="st30" d="M431.4,386.3c-3.5,4-7,7.9-10.5,11.9c2.4,0,4.8,0,7.3,0c2.6-4,5.2-7.9,7.9-11.9
                            C434.5,386.3,433,386.3,431.4,386.3z" />
                                                            <path class="st31" d="M436,386.3c-2.6,4-5.2,7.9-7.9,11.9c2.4,0,4.8,0,7.3,0c1.7-4,3.5-7.9,5.2-11.9
                            C439.1,386.3,437.6,386.3,436,386.3z" />
                                                            <path class="st30" d="M440.7,386.3c-1.7,4-3.5,7.9-5.2,11.9c2.4,0,4.8,0,7.3,0c0.9-4,1.7-7.9,2.6-11.9
                            C443.8,386.3,442.2,386.3,440.7,386.3z" />
                                                            <path class="st31" d="M445.3,386.3c-0.9,4-1.7,7.9-2.6,11.9c2.4,0,4.8,0,7.3,0c0-4,0-7.9,0-11.9
                            C448.4,386.3,446.9,386.3,445.3,386.3z" />
                                                            <path class="st30" d="M450,386.3c0,4,0,7.9,0,11.9c2.4,0,4.8,0,7.3,0c-0.9-4-1.7-7.9-2.6-11.9
                            C453.1,386.3,451.5,386.3,450,386.3z" />
                                                            <path class="st31" d="M454.6,386.3c0.9,4,1.7,7.9,2.6,11.9c2.4,0,4.8,0,7.3,0c-1.7-4-3.5-7.9-5.2-11.9
                            C457.7,386.3,456.2,386.3,454.6,386.3z" />
                                                            <path class="st30" d="M459.3,386.3c1.7,4,3.5,7.9,5.2,11.9c2.4,0,4.8,0,7.3,0c-2.6-4-5.2-7.9-7.9-11.9
                            C462.4,386.3,460.8,386.3,459.3,386.3z" />
                                                            <path class="st31" d="M471.8,398.2c2.4,0,4.8,0,7.3,0c-3.5-4-7-7.9-10.5-11.9c-1.5,0-3.1,0-4.6,0
                            C466.5,390.3,469.2,394.2,471.8,398.2z" />
                                                    </g>
                                                    <g>
                                                            <rect x="431.4" y="383.8" class="st30" width="4.7" height="2.5" />
                                                            <rect x="436" y="383.8" class="st30" width="4.7" height="2.5" />
                                                            <rect x="440.7" y="383.8" class="st30" width="4.7" height="2.5" />
                                                            <rect x="445.3" y="383.8" class="st30" width="4.7" height="2.5" />
                                                            <rect x="450" y="383.8" class="st30" width="4.7" height="2.5" />
                                                            <rect x="454.6" y="383.8" class="st30" width="4.7" height="2.5" />
                                                            <rect x="459.3" y="383.8" class="st30" width="4.7" height="2.5" />
                                                            <rect x="464" y="383.8" class="st30" width="4.7" height="2.5" />
                                                    </g>
                                            </g>
                                    </g>
                                    <g id="hospital">
                                            <g id="floor_0_3">
                                                    <polyline class="st32" points="230.9,431.7 230.9,384.4 330.6,384.4 330.6,431.7" />
                                                    <rect x="227.1" y="381.3" class="st19" width="106.3" height="3.1" />
                                            </g>
                                            <g id="floor_1">
                                                    <rect x="259.5" y="354.1" class="st32" width="42.8" height="27.2" />
                                                    <rect x="256.2" y="351.1" class="st19" width="49" height="3" />
                                            </g>
                                            <g id="windows_4">
                                                    <g class="window" id="window_18">
                                                            <rect x="236.7" y="390.6" class="st26" width="13" height="12.8" />
                                                            <rect x="237.6" y="391.4" class="st25" width="11.3" height="11.2" />
                                                    </g>
                                                    <g class="window" id="window_17">
                                                            <rect x="236.7" y="406.8" class="st26" width="13" height="12.8" />
                                                            <rect x="237.6" y="407.6" class="st25" width="11.3" height="11.2" />
                                                    </g>
                                                    <g class="window" id="window_16">
                                                            <rect x="255.2" y="406.8" class="st26" width="13" height="12.8" />
                                                            <rect x="256.1" y="407.6" class="st25" width="11.3" height="11.2" />
                                                    </g>
                                                    <g class="window" id="window_15">
                                                            <rect x="292.5" y="406.8" class="st26" width="13" height="12.8" />
                                                            <rect x="293.3" y="407.6" class="st25" width="11.3" height="11.2" />
                                                    </g>
                                                    <g class="window" id="window_14">
                                                            <rect x="310.7" y="406.8" class="st26" width="13" height="12.8" />
                                                            <rect x="311.6" y="407.6" class="st25" width="11.3" height="11.2" />
                                                    </g>
                                                    <g class="window" id="window_13">
                                                            <rect x="255.2" y="390.6" class="st26" width="13" height="12.8" />
                                                            <rect x="256.1" y="391.4" class="st25" width="11.3" height="11.2" />
                                                    </g>
                                                    <g class="window" id="window_12">
                                                            <rect x="273.7" y="390.6" class="st26" width="13" height="12.8" />
                                                            <rect x="274.6" y="391.4" class="st25" width="11.3" height="11.2" />
                                                    </g>
                                                    <g class="window" id="window_11">
                                                            <rect x="292.2" y="390.6" class="st26" width="13" height="12.8" />
                                                            <rect x="293.1" y="391.4" class="st25" width="11.3" height="11.2" />
                                                    </g>
                                                    <g class="window" id="window_10">
                                                            <rect x="310.7" y="390.6" class="st26" width="13" height="12.8" />
                                                            <rect x="311.6" y="391.4" class="st25" width="11.3" height="11.2" />
                                                    </g>
                                            </g>
                                            <rect id="ground_5" x="224.6" y="431.7" class="st19" width="111.9" height="3.4" />
                                            <polygon id="cross" class="st33" points="288.1,366.5 282.6,366.5 282.6,360.9 278,360.9 278,366.5 272.5,366.5 272.5,371 
                    278,371 278,376.6 282.6,376.6 282.6,371 288.1,371" />
                                            <g id="door_6">
                                                    <rect x="273.4" y="408" class="st34" width="14.8" height="22.6" />
                                                    <path class="st35" d="M288.9,431.7v-24.9h-16.2v24.9l0.8-1.2V408h14.8v22.6L288.9,431.7z" />
                                                    <rect x="275" y="408" class="st36" width="11.9" height="22.6" />
                                                    <rect x="276" y="408.9" class="st3" width="9.9" height="20.7" />
                                                    <g>
                                                            <rect x="276.8" y="409.8" class="st26" width="8.3" height="18.9" />
                                                            <rect x="277.3" y="411" class="st25" width="7.3" height="16.5" />
                                                    </g>
                                            </g>
                                    </g>
                                    <g id="church">
                                            <g id="chimney_2">
                                                    <rect x="133" y="353.7" class="st17" width="10.4" height="14.3" />
                                                    <rect x="131.2" y="347.5" class="st37" width="13.9" height="6.2" />
                                            </g>
                                            <g id="building_4">
                                                    <polygon id="roof_flat" class="st38" points="211.6,397.3 100.5,397.3 114.1,367.1 197.3,367.1" />
                                                    <rect id="floor_0_2" x="111.1" y="397.3" class="st39" width="89.1" height="32.5" />
                                                    <path id="roof_point" class="st3" d="M187.5,394L187.5,394L187.5,394c-0.5-0.7-1.1-1.3-1.9-1.6l-30-60.2l-29.4,60.5
                        c-0.4,0.2-0.7,0.5-1,0.9l-0.1,0.1l0,0c-0.6,0.7-0.9,1.6-0.9,2.6c0,2.3,1.8,4.1,4.1,4.1h4.7h46.2h4.7c2.3,0,4.1-1.8,4.1-4.1
                        C188.1,395.4,187.9,394.7,187.5,394z" />
                                                    <polygon id="front" class="st17" points="178.1,432.6 133,432.6 133,391.7 156.3,344.1 156.3,344.1 178.1,391.5" />
                                            </g>
                                            <g id="windows_3">
                                                    <g class="window" id="window_left">
                                                            <rect x="116.5" y="408" class="st3" width="12.5" height="14.7" />
                                                            <rect x="117.5" y="409.2" class="st22" width="10.5" height="12.3" />
                                                            <rect x="116.5" y="415.3" class="st3" width="12.5" height="1.1" />
                                                            <rect x="122.2" y="409.2" class="st3" width="2" height="12.3" />
                                                    </g>
                                                    <g class="window" id="window_right">
                                                            <rect x="183.5" y="408" class="st3" width="12.5" height="14.7" />
                                                            <rect x="184.5" y="409.2" class="st22" width="10.5" height="12.3" />
                                                            <rect x="183.5" y="415.3" class="st3" width="12.5" height="1.1" />
                                                            <rect x="189.3" y="409.2" class="st3" width="2" height="12.3" />
                                                    </g>
                                                    <g class="window" id="window_top_2">
                                                            <rect x="149.4" y="366.2" class="st3" width="12.5" height="23.3" />
                                                            <rect x="150.4" y="368.1" class="st22" width="10.5" height="19.6" />
                                                            <rect x="149.4" y="377.9" class="st3" width="12.5" height="1.8" />
                                                            <rect x="155.1" y="368.1" class="st3" width="2" height="19.6" />
                                                    </g>
                                            </g>
                                            <g id="door_5">
                                                    <path class="st3" d="M163,432.6v-22.4c0-3.4-3.3-6.2-7.4-6.2c-4.1,0-7.4,2.8-7.4,6.2v22.4H163z" />
                                                    <path class="st40" d="M161.6,432.6v-21.1c0-3.2-2.6-5.9-5.9-5.9c-3.2,0-5.9,2.6-5.9,5.9v21.1H161.6z" />
                                            </g>
                                            <rect id="ground_4" x="104.2" y="429.9" class="st41" width="104.4" height="5" />
                                    </g>
                            </g>
                    </g>
                    <g id="superman">
                            <g id="cape_1">
                                    <path fill="#212121" d="M72.6,61.1c0,0,2.9,22.3,4.8,29.8c4.6,17.9,2.1,26.9-5.7,47.2c0,0-5.2-7.4-14.2-3.3
                c-9,4.1-9.4,0.5-13.9-3.2c-4.5-3.8-10.3-3.6-15,0c-4.7,3.6-5-5-10.5-6.3c-5.5-1.3-4.3,5-14.3,0.2c-5-2.4-3.7-6.1-3.7-6.1
                s3.9,5,12.3-7.9c8.4-12.8,20.2-35.3,23.8-58.9C37.9,41.5,73.2,36.7,72.6,61.1z" />
                                    <path fill="#58595B" d="M62.4,45c0,0,6,2.4,6.4,21.9c0.3,11.2,4.1,26.4,4.1,42c0,15.6,0.1,23.9-2.8,27.7l-4,6.3
                c0,0,15.7-6.5,15.7-35.9c0-14.8-6.1-13.5-6.4-33C75.1,46.4,62.4,45,62.4,45z" />
                                    <path fill="#58595B" d="M4.6,119.9c0,0,4.6-1.5,11.1-7.7c7.3-7.1,14.9-25.2,18.9-37c3.3-9.6,5.3-27.7,11.7-30.6
                c0,0-13.2,2.1-17.1,20.5C25.6,81.7,17.2,111.3,4.6,119.9z" />
                                    <path d="M53.2,136.2c-2.3,0.6-3.7,0.3-5-0.4L56,84.6L53.2,136.2z" />
                                    <path d="M28.6,131.4c-0.1,0-0.1,0.1-0.2,0.1c-2.2,1.7-3.4,0.7-4.7-1l14.5-34.6L28.6,131.4z" />
                            </g>
                            <g id="naked_1">
                                    <g id="nakedbody_1">
                                            <path id="arm_left_1" fill="#EFCAAD" d="M35.8,49.9c0,0-7.8-1.8-18.1,10.6C7.4,73,8.5,76,9.3,80c0.9,4,16.4,15.4,16.4,15.4
                    s4.4,11.6,9.5,6.5c7.3-7.2-4.4-11-4.4-11s-6-11.8-12-14.4c0,0,18.4-14.1,21.6-18.9C41.1,56.6,42.3,52.8,35.8,49.9z" />
                                            <path id="arm_right_1" fill="#EFCAAD" d="M72.1,49.9c0,0,7.8-1.8,18.1,10.6C100.5,73,99.4,76,98.6,80c-0.9,4-16.4,15.4-16.4,15.4
                    s-4.4,11.6-9.5,6.5c-7.3-7.2,4.4-11,4.4-11s6-11.8,12-14.4c0,0-18.4-14.1-21.6-18.9C66.8,56.6,65.6,52.8,72.1,49.9z" />
                                            <g id="headtotal_1">
                                                    <g id="head_1">
                                                            <g>
                                                                    <path fill="#EFCAAD" d="M73.1,24.2c0.1,11.2-9.3,20.3-20.7,20.3s-20.7-9.4-20.7-20.3C31.9,3.8,41,0.1,52.4,0.1
                                S72.8,5.7,73.1,24.2z" />
                                                            </g>
                                                    </g>
                                                    <g id="ear_left_1">
                                                            <ellipse fill="#EFCAAD" cx="32.7" cy="27.3" rx="3" ry="3.5" />
                                                    </g>
                                                    <g id="ear_right_1">
                                                            <ellipse fill="#EFCAAD" cx="72.2" cy="27.3" rx="3" ry="3.5" />
                                                    </g>
                                            </g>
                                            <path id="legs_1" fill="#EFCAAD" d="M79.3,159.6c0,0-3.5-23.4-4.1-30.8c-0.6-7-4.2-27.7-4.2-27.7s-18.2,4.8-34.1-0.2
                    c0,0-2.2,20.7-2.3,28c-0.1,6.7-3.2,26.6-3.8,30.9c-2.2,0.6-11.8,3.5-9.7,6.6c4.2,6.2,13.8,1.9,16.3,0.8c1-0.4,3.7,0.6,4.5-1.5
                    c0.7-1.7-1.1-4.4-1.1-4.4s1.3-11.9,3.6-23.5c2.3-11.3,6.1-25.6,10.2-25.4c4.7,0.3,7.9,14.3,10.5,25.3c2.7,11.3,4.2,22.8,4.3,23.6
                    c-0.3,0.4-1.6,2.7-1,4.3c0.8,2.1,3.5,1.1,4.5,1.5c2.5,1,12.1,5.3,16.3-0.8C91.8,162.9,79.3,159.6,79.3,159.6z" />
                                            <path id="body_3" fill="#EFCAAD" d="M72.1,61.6c-0.3-0.4-0.6-0.6-0.8-0.7c0.4-5.5,1.2-9.8,2.4-11.2l-6.7-0.9l0,0h0l-3.3-0.4
                    c-2.8-0.8-6.2-2.9-5.3-8.9c0,0-8.1-3-11.3,1.7c0,0,1.4,5.5-3.3,6.3c-1.3,0.2-2.2,0.4-2.9,0.6c-0.8,0.1-7.3,1.3-8.9,1.8
                    c0,0,1.9,5.4,3.2,11.9c-2.5,2.8-2.6,3.3-2.6,3.3s1.7-1.4,3.2,0.3c0.4,2.5,1.2,4.9,1.1,7.3c-0.2,9.8,0,28,0,28s12.2,7.1,34.1,0.2
                    c0,0-2.1-18.7-0.1-34.4c0,0.2,0,0.2,0,0.2c1.6-3.6,4.3-1.6,4.3-1.6S74.9,64.8,72.1,61.6z" />
                                    </g>
                                    <g>
                                            <path fill="#754C29" d="M59.2,101l-0.1-0.3c-0.1,0-0.1,0.1-0.2,0.1L59.2,101z" />
                                    </g>
                                    <g id="nosemouth_1">
                                            <g id="mouth_1">
                                                    <path fill="#8B5E3C" d="M52,38.3c-3.3,0-4.9-3.1-5-3.3l0.7-0.4c0,0,1.5,3,4.5,2.8c3-0.1,4.9-2.9,4.9-2.9l0.7,0.5
                        c-0.1,0.1-2.1,3.1-5.5,3.2C52.2,38.3,52.1,38.3,52,38.3z" />
                                            </g>
                                            <g id="nose_1">
                                                    <path fill="#A97C50" d="M52.2,31.9c-0.1,0-0.1,0-0.2,0c-0.9-0.1-1.3-1.2-1.4-1.2l0.7-0.3L51,30.5l0.4-0.2
                        c0.1,0.2,0.4,0.7,0.7,0.7c0.3,0,0.8-0.2,1.2-0.8l0.6,0.5C53.4,31.5,52.8,31.9,52.2,31.9z" />
                                            </g>
                                    </g>
                                    <g id="under_1">
                                            <path id="underpant_1" fill="#E6E6E6" d="M75.6,126.3c-0.4-3.3-1.2-7.7-2-12c0-0.2-0.1-0.4-0.1-0.6c0,0,0,0,0,0
                    c-1.2-6.6-2.4-12.6-2.4-12.6s-18.2,4.8-34.1-0.2c0,0-2.3,16.7-2.9,25.7c2.9,1.2,8.5,3,12.7,1.9c2-7.4,4.6-13.1,7.5-12.9
                    c3.3,0.2,6.1,5.6,8.4,12.6C62.7,128.1,69.4,128.8,75.6,126.3z" />
                                            <path id="tanktop_1" fill="#E6E6E6" d="M66.9,49L66.9,49l-3.3-0.4c0,0-0.1,0-0.1,0c0.2,1.7,1.2,14.4-9.6,14.4
                    C41,63,42.2,48,42.2,48c-0.5,0.1-0.9,0.2-1.3,0.3c-0.2,0-0.9,0.2-1.8,0.3c0,0,1.5,15.4-3,19.5c0.2,1.6,0.3,3.3,0.2,4.8
                    c-0.2,9.8,0.6,27.9,0.6,27.9s8.6,4.9,24.2,2.6c3-0.5,6.3-1.3,10-2.4c0-0.9-0.7-18.4-0.2-32.8C68.8,66.4,64.3,60.7,66.9,49z" />
                                    </g>
                                    <g id="eyes_1">
                                            <g id="eye_left_1">
                                                    <circle fill="#3C2415" cx="44.1" cy="26.3" r="1.4" />
                                                    <circle fill="#FFFFFF" cx="43.5" cy="25.9" r="0.5" />
                                                    <circle fill="#603913" cx="44.6" cy="26.7" r="0.6" />
                                            </g>
                                            <g id="eye_right_1">
                                                    <circle fill="#3C2415" cx="61.2" cy="26.3" r="1.4" />
                                                    <circle fill="#FFFFFF" cx="60.6" cy="25.9" r="0.5" />
                                                    <circle fill="#603913" cx="61.7" cy="26.7" r="0.6" />
                                            </g>
                                    </g>
                            </g>
                            <g id="bottom_1">
                                    <path id="pants_1" d="M79.3,160.2c0-0.2-2.9-24.3-3.4-31.6c-0.5-7-4.1-28-4.1-28l-1.6,0.5c-0.1,0-7.9,2.1-17.5,2.1
                c-6,0-11.4-0.8-16.2-2.3c0,0-3,19.7-4,29.7c-0.6,6.7-2.5,26-3,29.8l-0.1,0.5l0.4,0.2c2.4,1.5,7.9,1.7,10.1,1.7l1.1,0l0.1-0.6
                c0-0.1,1.3-12,3.6-23.5c3.9-19.6,7.5-21.7,8.9-21.7h0c2,0.1,6,3.1,10.4,21.7c2.6,11.1,4.1,22.3,4.2,23.5l0.1,0.6l0.6,0.1
                c0.6,0.1,1.2,0.1,1.8,0.1c4.6,0,8.2-1.9,8.3-1.9l0.4-0.2L79.3,160.2z" />
                                    <path id="underwear_1" fill="#58595B" d="M72.4,100.4l-0.2-0.8H35.7l-0.1,0.4c-0.1,1.1-0.4,3.5-0.7,6.4l0,0.3l0.3,0.1
                c8.7,3.1,15.5,11.8,15.5,11.8l5.8,0.1c0,0,8-9.9,16.5-12C73.1,106.9,72.5,100.7,72.4,100.4z" />
                            </g>
                            <g id="boots_1">
                                    <g id="boot_right_1">
                                            <path fill="#F0B21D" d="M90.2,164.3c-1.8-3.3-7-4.9-10.3-5.7c-0.3-2.8-1-8-1.6-13.5l-0.1-1.3l-6.8-2.8l-6,4.8l0.2,1.3
                    c1.3,6.4,2.1,12.1,2.4,14.4c-1.4,3-1,6.7-1,6.9l0,0.4l0.4,0.2c0.4,0.1,9.1,3.4,15.7,3.4c4.1,0,6.6-1.2,7.4-3.7
                    C91.1,167.2,91,165.7,90.2,164.3z" />
                                            <path d="M66.9,166.7c0,1,0,1.7,0,1.7l0,0.4l0.4,0.2c0.4,0.1,9.1,3.4,15.7,3.4c4.1,0,6.6-1.2,7.4-3.7c0-0.1,0.1-0.2,0.1-0.4
                    C86.7,172.8,71,168.1,66.9,166.7z" />
                                    </g>
                                    <g id="boot_left_1">
                                            <path fill="#F0B21D" d="M30.8,143.4l-0.1,1.3c-0.6,5.2-1.2,10.2-1.5,13c-3.1,0.8-8,2.4-9.7,5.5c-0.7,1.3-0.9,2.8-0.3,4.4
                    c0.8,2.5,3.4,3.7,7.5,3.7c6.6,0,15.3-3.2,15.7-3.3l0.4-0.2l0-0.4c0-0.2,0.4-4.1-1.2-7.2c0.3-2.7,1-7.8,1.9-13.6l0.2-1.3l-6.1-4.1
                    L30.8,143.4z" />
                                            <path d="M19.2,168c1,2.1,3.4,3.3,7.3,3.3c6.6,0,15.3-3.2,15.7-3.3l0.4-0.2l0-0.4c0-0.1,0.1-0.7,0.1-1.6
                    C39.2,167.1,26.6,171.5,19.2,168z" />
                                    </g>
                            </g>
                            <g id="totaltop_1">
                                    <g id="top_1">
                                            <path id="shirt_1" fill="#F0B21D" d="M90.4,60.7c-7.5-9.1-13.8-10.8-16.9-11l-10.1-1.3c-0.1,0-0.2,0-0.3,0c-0.9,0-1.4,0.8-2.1,2
                    c-1.3,2.1-3.2,5.3-8.2,5.3c-3.9,0-5.6-3.1-6.8-5.4c-0.9-1.6-1.6-2.8-2.7-2.6c-1.2,0.2-2.2,0.4-2.9,0.6c-0.7,0.1-7.3,1.3-8.9,1.9
                    c-3.3,0.8-8.6,3.3-14.7,10.6C6.6,73.1,7.3,76.5,8.2,80.5l0.1,0.3c0.9,4.1,15,14.6,16.6,15.8l0.3,0.2l0.3-0.1
                    c0.1,0,1.9-0.7,3.2-1.9c1.3-1.3,2.2-2.8,2.3-2.9l0.2-0.3L31,91.2c-0.2-0.5-5.5-10.8-11.3-14.2c2.2-1.7,8-6.2,12.9-10.5
                    c0,0,0.5-0.4,1.1-0.4c0.4,0,0.7,0.1,1,0.4c0.4,2.6,0.5,4.9,0.5,7c-0.2,9.7,0.6,27.8,0.6,28l0,0.4l0.3,0.2
                    c0.2,0.1,5.8,3.3,16.3,3.3c5.8,0,12-1,18.4-3l0.5-0.2l0-0.5c0-0.2-0.8-19.1-0.1-33.8l0,0c0.5-1.1,1.2-1.7,2-1.7
                    c0.6,0,1.1,0.3,1.2,0.4c5,4.3,10.8,8.8,13,10.5c-5.8,3.4-11.1,13.7-11.3,14.2l-0.2,0.3l0.2,0.3c0,0.1,1,1.8,2.4,2.9
                    c1.4,1.1,1.7,1.3,3,1.9l0.4,0.2l0.3-0.3c1.6-1.2,15.8-11.7,16.6-15.8l0.1-0.3C99.9,76.5,100.6,73.1,90.4,60.7z" />
                                            <path id="sleeve_left_1" d="M37.6,48.8c-2.2,0.4-5.1,1-6.2,1.3c-3.3,0.8-8.6,3.3-14.7,10.6C6.6,73.1,7.3,76.5,8.2,80.5l0.1,0.3
                    c0.9,4.1,15,14.6,16.6,15.8l0.3,0.2l0.3-0.1c0.1,0,1.9-0.7,3.2-1.9c1.3-1.3,2.2-2.8,2.3-2.9l0.2-0.3L31,91.2
                    c-0.2-0.5-5.5-10.8-11.3-14.2c2.2-1.7,8-6.2,12.9-10.5c0,0,0.5-0.4,1.1-0.4c0.3,0,0.5,0.1,0.8,0.3C34,60.3,35.9,54.4,37.6,48.8z" />
                                            <path id="sleeve_right_1" d="M90.4,60.7c-7.5-9.1-13.8-10.8-16.9-11L70,49.3c2.6,4.8,3.1,10.7,2.6,17c0.2-0.1,0.4-0.1,0.6-0.1
                    c0.6,0,1.1,0.3,1.2,0.4c5,4.3,10.8,8.8,13,10.5c-5.8,3.4-11.1,13.7-11.3,14.2l-0.2,0.3l0.2,0.3c0,0.1,1,1.8,2.4,2.9
                    c1.4,1.1,1.7,1.3,3,1.9l0.4,0.2l0.3-0.3c1.6-1.2,15.8-11.7,16.6-15.8l0.1-0.3C99.9,76.5,100.6,73.1,90.4,60.7z" />
                                    </g>
                                    <g id="bird_1">
                                            <path id="body_2_" d="M57.1,62.4c-1.5,0.3-1.6-1.3-1.6-1.3c0-1.7,1.6-0.5,1.6-0.5s-0.3-2.2-2-2.3c-3.4-0.3-3.4,2.8-3.4,2.8
                    s0,1.3-1.1,1.3l0,5.6c-0.3,0-0.5-0.1-0.8-0.1c0.4,0.2,0.7,0.5,0.8,0.9c0.3,1.1,1.4,2.1,1.9,2.8l-1.6,3.3l2.9,3.3l2.9-3.3l-1.3-3.4
                    c0.5-0.7,1.2-1.6,1.5-2.7c0.1-0.5,0.6-0.9,1.3-1.1c-0.1,0-0.2,0-0.3,0L57.1,62.4z" />
                                            <g id="wing_right_1">
                                                    <path d="M57.4,62.3c-0.1,0-0.1,0-0.2,0c0.2,0,0.3,0,0.5,0c1.5,0,2.7,1.2,2.7,2.7c0,1.1-0.6,2-1.5,2.4c2.2-0.5,5.5-0.3,7.6-0.5
                        c3.2-0.3,4.1-5.7,4.1-5.7C61.6,61.1,59.2,61.7,57.4,62.3z" />
                                                    <path d="M60.4,65c0-1.5-1.2-2.7-2.7-2.7c-0.2,0-0.3,0-0.5,0c0,0-0.1,0-0.1,0C55.9,62.7,55,63.7,55,65c0,1.5,1.2,2.7,2.7,2.7
                        c0.1,0,0.2,0,0.3,0c0.2-0.1,0.5-0.2,0.8-0.2C59.8,67,60.4,66.1,60.4,65z" />
                                            </g>
                                            <g id="wing_left_1">
                                                    <path d="M47.7,65.2c0-1.5,1.2-2.7,2.7-2.8c-0.2,0-0.4,0-0.6-0.1c-1.8-0.6-4.2-1.2-13.1-1.2c0,0,0.9,5.4,4.1,5.7
                        c2.3,0.2,6.1,0,8.2,0.7C48.2,67.1,47.7,66.2,47.7,65.2z" />
                                                    <path d="M53.3,65.2c0-1.5-1.2-2.8-2.8-2.8c0,0-0.1,0-0.1,0c-1.5,0-2.7,1.3-2.7,2.8c0,1,0.5,1.9,1.3,2.3c0.3,0.1,0.5,0.2,0.7,0.3
                        c0.3,0.1,0.5,0.1,0.8,0.1C52,68,53.3,66.8,53.3,65.2z" />
                                            </g>
                                    </g>
                            </g>
                            <path id="hair_1" fill="#E4B622" d="M52.5,0.1C28,0.1,31.8,24.5,32,24.5c0,0,2.3-2.1,4.1-5.4c2.3-4.2,3.2-5.8,3.2-5.8
            s4.9,0.6,11.2,0.7c-0.1,1.6,0.5,3.5,2.7,4.3c0,0-1.5-3,0.4-4.3c3.8,0,7.9-0.2,11.7-0.8c0,0,1.3,3,3.5,6.3c1.8,2.8,3.7,4.6,3.7,4.6
            C72.7,23.8,75.3,0.1,52.5,0.1z" />
                            <g id="mask_1">
                                    <g>
                                            <path fill="#414042" d="M67.1,5.2C63.7,1.7,58.7,0,52.4,0C45.5,0,41,1.4,37.7,4.5c-4.1,3.8-6.1,10.3-6.2,19.9
                    c0,3.1,0.7,5.3,2.2,6.8c2.2,2.2,6,2.7,11,2.7c1.2,0,2.4,0,3.6,0c1.3,0,2.7-0.1,4.1-0.1c1.6,0,3.1,0,4.6,0.1c1.4,0,2.7,0.1,4,0.1
                    c4.5,0,8-0.4,10.1-2.6c1.5-1.5,2.2-3.8,2.2-6.9C73.2,15.6,71.1,9.2,67.1,5.2z M44,28.8c-1.5,0-2.8-1.2-2.8-2.8
                    c0-1.5,1.2-2.8,2.8-2.8c1.5,0,2.8,1.2,2.8,2.8C46.8,27.6,45.5,28.8,44,28.8z M61.9,28.8c-1.5,0-2.8-1.2-2.8-2.8
                    c0-1.5,1.2-2.8,2.8-2.8c1.5,0,2.8,1.2,2.8,2.8C64.7,27.6,63.4,28.8,61.9,28.8z" />
                                    </g>
                                    <path d="M64.8,3.3C61.6,1.1,57.4,0,52.4,0c-5.5,0-9.6,0.9-12.6,2.9L39.6,3l0.2,0.2c2.3,2.1,4.4,4,6,5.8c4.7,5,6.5,9,6.5,9.1
                l0.2,0.4l0.2-0.4c0,0,2.2-4.5,7.1-9.6c1.4-1.5,3.1-3.1,5.1-4.9L65,3.4L64.8,3.3z" />
                                    <g id="maskLight">
                                            <path opacity="0.5" fill="#FFFFFF" d="M36.4,10.4l1.9,0.8c0,0-1,2-1.4,4.6L35,15.4C35,15.4,35.1,12.9,36.4,10.4z" />
                                            <polygon opacity="0.5" fill="#FFFFFF" points="34.9,16.5 36.7,16.9 36.6,18.6 34.7,18.4 	" />
                                    </g>
                            </g>
                    </g>
            </g>
            <g id="sky">
                    <g id="clouds">
                            <g class="cloud" id="cloud_13">
                                    <path class="st42" d="M548.4,156.9c0,0-9.1-0.4-12.3-9.1c-3.2-8.7,4.3-19,12.3-17.4c0,0-0.4-18.6,19.4-14.2
                c0,0,5.1-12.3,17.8-10.7c12.7,1.6,18.6,13.1,19,17c0,0,14.2,0.4,17,14.6c2.8,14.2-6.7,19-19.4,19.8
                C589.5,157.7,548.4,156.9,548.4,156.9z" />
                                    <path class="st43" d="M622,137.1c-2.8-14.2-17-14.6-17-14.6c-0.4-4-6.3-15.4-19-17c-2.6-0.3-4.9,0-6.9,0.6v51.2
                c9.4,0,18.6,0,23.5-0.3C615.2,156.1,624.7,151.4,622,137.1z" />
                            </g>
                            <g class="cloud" id="cloud_12">
                                    <path class="st42" d="M432.9,194.1c0,0-6.2-0.3-8.4-6.2c-2.2-5.9,3-12.9,8.4-11.9c0,0-0.3-12.7,13.2-9.7c0,0,3.5-8.4,12.1-7.3
                c8.6,1.1,12.7,8.9,12.9,11.6c0,0,9.7,0.3,11.6,10c1.9,9.7-4.6,12.9-13.2,13.5C461,194.6,432.9,194.1,432.9,194.1z" />
                                    <path class="st43" d="M483.1,180.6c-1.9-9.7-11.6-10-11.6-10c-0.3-2.7-4.3-10.5-12.9-11.6c-1.8-0.2-3.3,0-4.7,0.4v34.9
                c6.4,0,12.7,0,16-0.2C478.5,193.5,485,190.3,483.1,180.6z" />
                            </g>
                            <g class="cloud" id="cloud_11">
                                    <path class="st42" d="M83.1,153.3c0,0-4.9-0.2-6.6-4.9c-1.7-4.7,2.3-10.2,6.6-9.3c0,0-0.2-10,10.4-7.6c0,0,2.8-6.6,9.6-5.7
                c6.8,0.8,10,7,10.2,9.1c0,0,7.6,0.2,9.1,7.9c1.5,7.6-3.6,10.2-10.4,10.6C105.2,153.7,83.1,153.3,83.1,153.3z" />
                                    <path class="st43" d="M122.6,142.7c-1.5-7.6-9.1-7.9-9.1-7.9c-0.2-2.1-3.4-8.3-10.2-9.1c-1.4-0.2-2.6,0-3.7,0.3v27.5
                c5,0,10,0,12.6-0.2C119,152.9,124.1,150.3,122.6,142.7z" />
                            </g>
                            <g class="cloud" id="cloud_10">
                                    <path class="st42" d="M712.6,276.2c0,0-6.2-0.3-8.4-6.2c-2.2-5.9,3-12.9,8.4-11.9c0,0-0.3-12.7,13.2-9.7c0,0,3.5-8.4,12.1-7.3
                c8.6,1.1,12.7,8.9,12.9,11.6c0,0,9.7,0.3,11.6,10c1.9,9.7-4.6,12.9-13.2,13.5C740.6,276.7,712.6,276.2,712.6,276.2z" />
                                    <path class="st43" d="M762.7,262.7c-1.9-9.7-11.6-10-11.6-10c-0.3-2.7-4.3-10.5-12.9-11.6c-1.8-0.2-3.3,0-4.7,0.4v34.9
                c6.4,0,12.7,0,16-0.2C758.2,275.6,764.6,272.4,762.7,262.7z" />
                            </g>
                            <g class="cloud" id="cloud_9">
                                    <path class="st42" d="M299.4,292.5c0,0-6-0.3-8-6c-2.1-5.7,2.9-12.4,8-11.4c0,0-0.3-12.2,12.7-9.3c0,0,3.4-8,11.7-7
                c8.3,1,12.2,8.6,12.4,11.1c0,0,9.3,0.3,11.1,9.6c1.8,9.3-4.4,12.4-12.7,13C326.4,293,299.4,292.5,299.4,292.5z" />
                                    <path class="st43" d="M347.6,279.5c-1.8-9.3-11.1-9.6-11.1-9.6c-0.3-2.6-4.1-10.1-12.4-11.1c-1.7-0.2-3.2,0-4.5,0.4v33.6
                c6.2,0,12.2,0,15.4-0.2C343.2,292,349.5,288.9,347.6,279.5z" />
                            </g>
                            <g class="cloud" id="cloud_8">
                                    <path class="st42" d="M179,247.4c0,0-8.1-0.3-10.9-8c-2.8-7.7,3.9-16.8,10.9-15.4c0,0-0.4-16.5,17.2-12.6c0,0,4.6-10.9,15.8-9.5
                c11.2,1.4,16.5,11.6,16.8,15.1c0,0,12.6,0.4,15.1,13c2.4,12.6-6,16.8-17.2,17.5C215.4,248.1,179,247.4,179,247.4z" />
                                    <path class="st43" d="M244.1,229.9c-2.5-12.6-15.1-13-15.1-13c-0.4-3.5-5.6-13.7-16.8-15.1c-2.3-0.3-4.3,0-6.1,0.5v45.3
                c8.3,0,16.4,0,20.8-0.3C238.2,246.7,246.6,242.5,244.1,229.9z" />
                            </g>
                            <g class="cloud" id="cloud_7">
                                    <path class="st42" d="M677.2,140.1c0,0-8.6-0.4-11.5-8.6c-3-8.2,4.1-17.9,11.5-16.4c0,0-0.4-17.5,18.2-13.4
                c0,0,4.8-11.5,16.8-10.1c11.9,1.5,17.5,12.3,17.9,16c0,0,13.4,0.4,16,13.8c2.6,13.4-6.3,17.9-18.2,18.6
                C715.9,140.9,677.2,140.1,677.2,140.1z" />
                                    <path class="st43" d="M746.4,121.5c-2.6-13.4-16-13.8-16-13.8c-0.4-3.7-6-14.5-17.9-16c-2.4-0.3-4.6,0-6.5,0.5v48.2
                c8.8,0,17.5,0,22.1-0.3C740.1,139.4,749.1,134.9,746.4,121.5z" />
                            </g>
                    </g>
                    <g id="planegroup">
                            <g id="plane">
                                    <rect x="564.3" y="47.9" class="st3" width="1.9" height="8" />
                                    <path class="st44" d="M577.9,33.3c2.8,0,5.7,0.9,8.1,2.2c4.6,2.5,15.1,15.9,4.2,16.3c-2.1,0.1-4.2,0-6.2,0c-10.5,0-21.1,0-31.6,0
                c-8.5,0-17.1,0-25.6,0c-6.8,0-13-1-18.9-4.3c-5.6-3.2-10-8.1-12-14.2C495.8,33.3,577.9,33.3,577.9,33.3z" />
                                    <g>
                                            <path class="st45" d="M500.2,41.1c-1.9-2.3-3.4-4.9-4.4-7.8c0,0,82.1,0,82.1,0c2.8,0,5.7,0.9,8.1,2.2c1.6,0.9,3.9,3.1,5.8,5.6
                    H500.2z" />
                                            <path class="st45" d="M595,48c0.1,2.1-1.2,3.7-4.8,3.8c-2.1,0.1-4.2,0-6.2,0c-10.5,0-21.1,0-31.6,0c-8.5,0-17.1,0-25.6,0
                    c-6.4,0-12.3-0.9-18-3.8H595z" />
                                    </g>
                                    <path class="st46" d="M579,37.8h9.9c1.9,1.8,3.8,4.3,5,6.7c-0.2,0.1-0.4,0.1-0.7,0.1H579c-1.5,0-2.7-1.2-2.7-2.6v-1.6
                C576.3,38.9,577.5,37.8,579,37.8z" />
                                    <g>
                                            <circle class="st3" cx="552.7" cy="41.1" r="3.8" />
                                            <circle class="st46" cx="552.7" cy="41.1" r="2.8" />
                                    </g>
                                    <g>
                                            <circle class="st3" cx="539.4" cy="41.1" r="3.8" />
                                            <circle class="st46" cx="539.4" cy="41.1" r="2.8" />
                                    </g>
                                    <g>
                                            <circle class="st3" cx="528" cy="41.1" r="3.8" />
                                            <circle class="st46" cx="528" cy="41.1" r="2.8" />
                                    </g>
                                    <g>
                                            <circle class="st3" cx="515.7" cy="41.1" r="3.8" />
                                            <circle class="st46" cx="515.7" cy="41.1" r="2.8" />
                                    </g>
                                    <path class="st47" d="M569.5,43.4c0,1.4-1.2,2.6-2.6,2.6h-1.1c-1.4,0-2.6-1.2-2.6-2.6v-4.5c0-1.4,1.2-2.6,2.6-2.6h1.1
                c1.4,0,2.6,1.2,2.6,2.6V43.4z" />
                                    <polygon class="st44" points="512.9,33.3 495.5,33.3 490.5,37.3 501.7,37.8" />
                                    <path class="st45" d="M502.4,38.3c0,0.6-0.5,1.1-1.1,1.1H489c-0.6,0-1.1-0.5-1.1-1.1l0,0c0-0.6,0.5-1.1,1.1-1.1h12.2
                C501.8,37.3,502.4,37.7,502.4,38.3L502.4,38.3z" />
                                    <path class="st45" d="M506.8,20.5c0,0.6-0.5,1.1-1.1,1.1h-12.2c-0.6,0-1.1-0.5-1.1-1.1l0,0c0-0.6,0.5-1.1,1.1-1.1h12.2
                C506.3,19.5,506.8,19.9,506.8,20.5L506.8,20.5z" />
                                    <polygon class="st48" points="495.8,33.2 494.7,21.6 504,21.6 512.9,33.2" />
                                    <g>
                                            <path class="st48" d="M558.9,47.9L558.9,47.9l5.4,0v8h-5.4v0c-1.9-0.1-9.9-0.3-15.8-1.4l15.6-6.6L558.9,47.9z" />
                                    </g>
                                    <g>
                                            <path class="st46" d="M568.9,51.9c0,1.7-1.2,3.1-2.8,3.5v-7C567.8,48.7,568.9,50.2,568.9,51.9z" />
                                    </g>
                                    <polygon class="st44" points="561.2,47.9 540.7,47.9 525.4,56.8 537.6,57.9" />
                                    <path class="st45" d="M539.4,57.9c0,0.6-0.6,1.1-1.3,1.1h-13.7c-0.7,0-1.3-0.5-1.3-1.1l0,0c0-0.6,0.6-1.1,1.3-1.1h13.7
                C538.8,56.8,539.4,57.3,539.4,57.9L539.4,57.9z" />
                            </g>
                            <g id="trail">
                                    <line class="st49" x1="479.5" y1="46.3" x2="466.4" y2="46.3" />
                                    <line class="st49" x1="459.5" y1="46.3" x2="446.4" y2="46.3" />
                                    <line class="st49" x1="439.5" y1="46.3" x2="426.4" y2="46.3" />
                                    <line class="st49" x1="419.5" y1="46.3" x2="406.4" y2="46.3" />
                                    <line class="st49" x1="399.5" y1="46.3" x2="386.4" y2="46.3" />
                                    <line class="st49" x1="379.5" y1="46.3" x2="366.4" y2="46.3" />
                                    <line class="st49" x1="359.5" y1="46.3" x2="346.4" y2="46.3" />
                                    <line class="st49" x1="339.5" y1="46.3" x2="326.4" y2="46.3" />
                                    <line class="st49" x1="319.5" y1="46.3" x2="306.4" y2="46.3" />
                                    <line class="st49" x1="299.5" y1="46.3" x2="286.4" y2="46.3" />
                                    <line class="st49" x1="279.5" y1="46.3" x2="266.4" y2="46.3" />
                                    <line class="st49" x1="259.5" y1="46.3" x2="246.4" y2="46.3" />
                                    <line class="st49" x1="239.5" y1="46.3" x2="226.4" y2="46.3" />
                                    <line class="st49" x1="219.5" y1="46.3" x2="206.4" y2="46.3" />
                                    <line class="st49" x1="199.5" y1="46.3" x2="186.4" y2="46.3" />
                                    <line class="st49" x1="179.5" y1="46.3" x2="166.4" y2="46.3" />
                                    <line class="st49" x1="159.5" y1="46.3" x2="146.4" y2="46.3" />
                                    <line class="st49" x1="139.5" y1="46.3" x2="126.4" y2="46.3" />
                                    <line class="st49" x1="119.5" y1="46.3" x2="106.4" y2="46.3" />
                                    <line class="st49" x1="99.5" y1="46.3" x2="86.4" y2="46.3" />
                                    <line class="st49" x1="79.5" y1="46.3" x2="66.4" y2="46.3" />
                                    <line class="st49" x1="59.5" y1="46.3" x2="46.4" y2="46.3" />
                            </g>
                    </g>
            </g>
            <rect id="filter" width="841.9" height="595.3" />
    </svg>
`;

export default template;