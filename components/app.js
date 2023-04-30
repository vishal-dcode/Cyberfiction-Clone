function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
       ./assets/images/bg_male/male0001.png
       ./assets/images/bg_male/male0002.png
       ./assets/images/bg_male/male0003.png
       ./assets/images/bg_male/male0004.png
       ./assets/images/bg_male/male0005.png
       ./assets/images/bg_male/male0006.png
       ./assets/images/bg_male/male0007.png
       ./assets/images/bg_male/male0008.png
       ./assets/images/bg_male/male0009.png
       ./assets/images/bg_male/male0010.png
       ./assets/images/bg_male/male0011.png
       ./assets/images/bg_male/male0012.png
       ./assets/images/bg_male/male0013.png
       ./assets/images/bg_male/male0014.png
       ./assets/images/bg_male/male0015.png
       ./assets/images/bg_male/male0016.png
       ./assets/images/bg_male/male0017.png
       ./assets/images/bg_male/male0018.png
       ./assets/images/bg_male/male0019.png
       ./assets/images/bg_male/male0020.png
       ./assets/images/bg_male/male0021.png
       ./assets/images/bg_male/male0022.png
       ./assets/images/bg_male/male0023.png
       ./assets/images/bg_male/male0024.png
       ./assets/images/bg_male/male0025.png
       ./assets/images/bg_male/male0026.png
       ./assets/images/bg_male/male0027.png
       ./assets/images/bg_male/male0028.png
       ./assets/images/bg_male/male0029.png
       ./assets/images/bg_male/male0030.png
       ./assets/images/bg_male/male0031.png
       ./assets/images/bg_male/male0032.png
       ./assets/images/bg_male/male0033.png
       ./assets/images/bg_male/male0034.png
       ./assets/images/bg_male/male0035.png
       ./assets/images/bg_male/male0036.png
       ./assets/images/bg_male/male0037.png
       ./assets/images/bg_male/male0038.png
       ./assets/images/bg_male/male0039.png
       ./assets/images/bg_male/male0040.png
       ./assets/images/bg_male/male0041.png
       ./assets/images/bg_male/male0042.png
       ./assets/images/bg_male/male0043.png
       ./assets/images/bg_male/male0044.png
       ./assets/images/bg_male/male0045.png
       ./assets/images/bg_male/male0046.png
       ./assets/images/bg_male/male0047.png
       ./assets/images/bg_male/male0048.png
       ./assets/images/bg_male/male0049.png
       ./assets/images/bg_male/male0050.png
       ./assets/images/bg_male/male0051.png
       ./assets/images/bg_male/male0052.png
       ./assets/images/bg_male/male0053.png
       ./assets/images/bg_male/male0054.png
       ./assets/images/bg_male/male0055.png
       ./assets/images/bg_male/male0056.png
       ./assets/images/bg_male/male0057.png
       ./assets/images/bg_male/male0058.png
       ./assets/images/bg_male/male0059.png
       ./assets/images/bg_male/male0060.png
       ./assets/images/bg_male/male0061.png
       ./assets/images/bg_male/male0062.png
       ./assets/images/bg_male/male0063.png
       ./assets/images/bg_male/male0064.png
       ./assets/images/bg_male/male0065.png
       ./assets/images/bg_male/male0066.png
       ./assets/images/bg_male/male0067.png
       ./assets/images/bg_male/male0068.png
       ./assets/images/bg_male/male0069.png
       ./assets/images/bg_male/male0070.png
       ./assets/images/bg_male/male0071.png
       ./assets/images/bg_male/male0072.png
       ./assets/images/bg_male/male0073.png
       ./assets/images/bg_male/male0074.png
       ./assets/images/bg_male/male0075.png
       ./assets/images/bg_male/male0076.png
       ./assets/images/bg_male/male0077.png
       ./assets/images/bg_male/male0078.png
       ./assets/images/bg_male/male0079.png
       ./assets/images/bg_male/male0080.png
       ./assets/images/bg_male/male0081.png
       ./assets/images/bg_male/male0082.png
       ./assets/images/bg_male/male0083.png
       ./assets/images/bg_male/male0084.png
       ./assets/images/bg_male/male0085.png
       ./assets/images/bg_male/male0086.png
       ./assets/images/bg_male/male0087.png
       ./assets/images/bg_male/male0088.png
       ./assets/images/bg_male/male0089.png
       ./assets/images/bg_male/male0090.png
       ./assets/images/bg_male/male0091.png
       ./assets/images/bg_male/male0092.png
       ./assets/images/bg_male/male0093.png
       ./assets/images/bg_male/male0094.png
       ./assets/images/bg_male/male0095.png
       ./assets/images/bg_male/male0096.png
       ./assets/images/bg_male/male0097.png
       ./assets/images/bg_male/male0098.png
       ./assets/images/bg_male/male0099.png
       ./assets/images/bg_male/male0100.png
       ./assets/images/bg_male/male0101.png
       ./assets/images/bg_male/male0102.png
       ./assets/images/bg_male/male0103.png
       ./assets/images/bg_male/male0104.png
       ./assets/images/bg_male/male0105.png
       ./assets/images/bg_male/male0106.png
       ./assets/images/bg_male/male0107.png
       ./assets/images/bg_male/male0108.png
       ./assets/images/bg_male/male0109.png
       ./assets/images/bg_male/male0110.png
       ./assets/images/bg_male/male0111.png
       ./assets/images/bg_male/male0112.png
       ./assets/images/bg_male/male0113.png
       ./assets/images/bg_male/male0114.png
       ./assets/images/bg_male/male0115.png
       ./assets/images/bg_male/male0116.png
       ./assets/images/bg_male/male0117.png
       ./assets/images/bg_male/male0118.png
       ./assets/images/bg_male/male0119.png
       ./assets/images/bg_male/male0120.png
       ./assets/images/bg_male/male0121.png
       ./assets/images/bg_male/male0122.png
       ./assets/images/bg_male/male0123.png
       ./assets/images/bg_male/male0124.png
       ./assets/images/bg_male/male0125.png
       ./assets/images/bg_male/male0126.png
       ./assets/images/bg_male/male0127.png
       ./assets/images/bg_male/male0128.png
       ./assets/images/bg_male/male0129.png
       ./assets/images/bg_male/male0130.png
       ./assets/images/bg_male/male0131.png
       ./assets/images/bg_male/male0132.png
       ./assets/images/bg_male/male0133.png
       ./assets/images/bg_male/male0134.png
       ./assets/images/bg_male/male0135.png
       ./assets/images/bg_male/male0136.png
       ./assets/images/bg_male/male0137.png
       ./assets/images/bg_male/male0138.png
       ./assets/images/bg_male/male0139.png
       ./assets/images/bg_male/male0140.png
       ./assets/images/bg_male/male0141.png
       ./assets/images/bg_male/male0142.png
       ./assets/images/bg_male/male0143.png
       ./assets/images/bg_male/male0144.png
       ./assets/images/bg_male/male0145.png
       ./assets/images/bg_male/male0146.png
       ./assets/images/bg_male/male0147.png
       ./assets/images/bg_male/male0148.png
       ./assets/images/bg_male/male0149.png
       ./assets/images/bg_male/male0150.png
       ./assets/images/bg_male/male0151.png
       ./assets/images/bg_male/male0152.png
       ./assets/images/bg_male/male0153.png
       ./assets/images/bg_male/male0154.png
       ./assets/images/bg_male/male0155.png
       ./assets/images/bg_male/male0156.png
       ./assets/images/bg_male/male0157.png
       ./assets/images/bg_male/male0158.png
       ./assets/images/bg_male/male0159.png
       ./assets/images/bg_male/male0160.png
       ./assets/images/bg_male/male0161.png
       ./assets/images/bg_male/male0162.png
       ./assets/images/bg_male/male0163.png
       ./assets/images/bg_male/male0164.png
       ./assets/images/bg_male/male0165.png
       ./assets/images/bg_male/male0166.png
       ./assets/images/bg_male/male0167.png
       ./assets/images/bg_male/male0168.png
       ./assets/images/bg_male/male0169.png
       ./assets/images/bg_male/male0170.png
       ./assets/images/bg_male/male0171.png
       ./assets/images/bg_male/male0172.png
       ./assets/images/bg_male/male0173.png
       ./assets/images/bg_male/male0174.png
       ./assets/images/bg_male/male0175.png
       ./assets/images/bg_male/male0176.png
       ./assets/images/bg_male/male0177.png
       ./assets/images/bg_male/male0178.png
       ./assets/images/bg_male/male0179.png
       ./assets/images/bg_male/male0180.png
       ./assets/images/bg_male/male0181.png
       ./assets/images/bg_male/male0182.png
       ./assets/images/bg_male/male0183.png
       ./assets/images/bg_male/male0184.png
       ./assets/images/bg_male/male0185.png
       ./assets/images/bg_male/male0186.png
       ./assets/images/bg_male/male0187.png
       ./assets/images/bg_male/male0188.png
       ./assets/images/bg_male/male0189.png
       ./assets/images/bg_male/male0190.png
       ./assets/images/bg_male/male0191.png
       ./assets/images/bg_male/male0192.png
       ./assets/images/bg_male/male0193.png
       ./assets/images/bg_male/male0194.png
       ./assets/images/bg_male/male0195.png
       ./assets/images/bg_male/male0196.png
       ./assets/images/bg_male/male0197.png
       ./assets/images/bg_male/male0198.png
       ./assets/images/bg_male/male0199.png
       ./assets/images/bg_male/male0200.png
       ./assets/images/bg_male/male0201.png
       ./assets/images/bg_male/male0202.png
       ./assets/images/bg_male/male0203.png
       ./assets/images/bg_male/male0204.png
       ./assets/images/bg_male/male0205.png
       ./assets/images/bg_male/male0206.png
       ./assets/images/bg_male/male0207.png
       ./assets/images/bg_male/male0208.png
       ./assets/images/bg_male/male0209.png
       ./assets/images/bg_male/male0210.png
       ./assets/images/bg_male/male0211.png
       ./assets/images/bg_male/male0212.png
       ./assets/images/bg_male/male0213.png
       ./assets/images/bg_male/male0214.png
       ./assets/images/bg_male/male0215.png
       ./assets/images/bg_male/male0216.png
       ./assets/images/bg_male/male0217.png
       ./assets/images/bg_male/male0218.png
       ./assets/images/bg_male/male0219.png
       ./assets/images/bg_male/male0220.png
       ./assets/images/bg_male/male0221.png
       ./assets/images/bg_male/male0222.png
       ./assets/images/bg_male/male0223.png
       ./assets/images/bg_male/male0224.png
       ./assets/images/bg_male/male0225.png
       ./assets/images/bg_male/male0226.png
       ./assets/images/bg_male/male0227.png
       ./assets/images/bg_male/male0228.png
       ./assets/images/bg_male/male0229.png
       ./assets/images/bg_male/male0230.png
       ./assets/images/bg_male/male0231.png
       ./assets/images/bg_male/male0232.png
       ./assets/images/bg_male/male0233.png
       ./assets/images/bg_male/male0234.png
       ./assets/images/bg_male/male0235.png
       ./assets/images/bg_male/male0236.png
       ./assets/images/bg_male/male0237.png
       ./assets/images/bg_male/male0238.png
       ./assets/images/bg_male/male0239.png
       ./assets/images/bg_male/male0240.png
       ./assets/images/bg_male/male0241.png
       ./assets/images/bg_male/male0242.png
       ./assets/images/bg_male/male0243.png
       ./assets/images/bg_male/male0244.png
       ./assets/images/bg_male/male0245.png
       ./assets/images/bg_male/male0246.png
       ./assets/images/bg_male/male0247.png
       ./assets/images/bg_male/male0248.png
       ./assets/images/bg_male/male0249.png
       ./assets/images/bg_male/male0250.png
       ./assets/images/bg_male/male0251.png
       ./assets/images/bg_male/male0252.png
       ./assets/images/bg_male/male0253.png
       ./assets/images/bg_male/male0254.png
       ./assets/images/bg_male/male0255.png
       ./assets/images/bg_male/male0256.png
       ./assets/images/bg_male/male0257.png
       ./assets/images/bg_male/male0258.png
       ./assets/images/bg_male/male0259.png
       ./assets/images/bg_male/male0260.png
       ./assets/images/bg_male/male0261.png
       ./assets/images/bg_male/male0262.png
       ./assets/images/bg_male/male0263.png
       ./assets/images/bg_male/male0264.png
       ./assets/images/bg_male/male0265.png
       ./assets/images/bg_male/male0266.png
       ./assets/images/bg_male/male0267.png
       ./assets/images/bg_male/male0268.png
       ./assets/images/bg_male/male0269.png
       ./assets/images/bg_male/male0270.png
       ./assets/images/bg_male/male0271.png
       ./assets/images/bg_male/male0272.png
       ./assets/images/bg_male/male0273.png
       ./assets/images/bg_male/male0274.png
       ./assets/images/bg_male/male0275.png
       ./assets/images/bg_male/male0276.png
       ./assets/images/bg_male/male0277.png
       ./assets/images/bg_male/male0278.png
       ./assets/images/bg_male/male0279.png
       ./assets/images/bg_male/male0280.png
       ./assets/images/bg_male/male0281.png
       ./assets/images/bg_male/male0282.png
       ./assets/images/bg_male/male0283.png
       ./assets/images/bg_male/male0284.png
       ./assets/images/bg_male/male0285.png
       ./assets/images/bg_male/male0286.png
       ./assets/images/bg_male/male0287.png
       ./assets/images/bg_male/male0288.png
       ./assets/images/bg_male/male0289.png
       ./assets/images/bg_male/male0290.png
       ./assets/images/bg_male/male0291.png
       ./assets/images/bg_male/male0292.png
       ./assets/images/bg_male/male0293.png
       ./assets/images/bg_male/male0294.png
       ./assets/images/bg_male/male0295.png
       ./assets/images/bg_male/male0296.png
       ./assets/images/bg_male/male0297.png
       ./assets/images/bg_male/male0298.png
       ./assets/images/bg_male/male0299.png
       ./assets/images/bg_male/male0300.png
   `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `100% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}
ScrollTrigger.create({
  trigger: "#page1>canvas",
  pin: true,
  // markers: true,
  scroller: `#main`,
  start: `top top`,
  end: `700% top`,
});

gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page4", {
  scrollTrigger: {
    trigger: `#page4`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
