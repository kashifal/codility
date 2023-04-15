export const dummyModelCardData = [
    {
      title: "ControlNet-Openpose",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on Scribble images.",
      route: "ControlNet-Openpose",
      badge: "SD-1.5",
      img: "/home/image1.jpg",
      api:'https://api.segmind.com/v1/sd1.5-controlnet-openpose',
      seed: '549767547333',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'NONE'
    },
    {
      title: "ControlNet-Scribble",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on Canny edges.",
      route: "ControlNet-Scribble",
      img: "/home/image2.jpg",
  
      badge: "SD-1.4",
      api:'https://api.segmind.com/v1/sd1.5-controlnet-scribble',
      seed: '85497675147333',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'NONE'
    },
    {
      title: "jagilley/controlnet-hed",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on HED Boundary.",
      route: "jagilley-controlnet-hed",
      badge: "SD-1.4",
      img: "/home/image5.jpg",
      api:'https://api.segmind.com/v1/sd1.5-controlnet-hed',
      seed: '1543285487314',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'mangled ears'
    },
    {
      title: "ControlNet-Depth",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on Depth estimation.",
      route: "ControlNet-Depth",
      badge: "SD-2.0",
      img: "/home/image6.jpg",
      api:'https://api.segmind.com/v1/sd1.5-controlnet-depth',
      seed: '131487365682',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'mangled ears'
    },
    {
      title: "ControlNet Canny",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on HED Boundary.",
      route: "jagilley-controlnet-pose",
      badge: "SD-2.1",
      img: "/home/canny.jpg",
      api:'https://api.segmind.com/v1/sd1.5-controlnet-canny',
      seed: '3131738736286',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'NONE'
    },
    {
      title: "ControlNet MLSD",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on HED Boundary.",
      route: "ControlNet-MLSD",
      badge: "SD-1.5",
      img: "/home/msld.jpg",
      api:'https://api.segmind.com/v1/sd1.5-controlnet-mlsd',
      seed: '1314873682',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'moon'
    },
    {
      title: "stable-diffusion-inpainting",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on HED Boundary.",
      route: "stable-diffusion-inpainting",
      badge: "SD-2.1",
      img: "/home/impainting.jpg",
      api:'https://api.segmind.com/v1/sd2.1-txt2img',
      seed: '17123564234',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'NONE'
    },
    {
      title: "Stable-diffusion-2.1",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on HED Boundary.",
      route: "Stable-diffusion-2-1",
      badge: "SD-2.1",
      img: "/home/sd-2.jpg",
    },
    {
      title: "stable-diffusion-img2img",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on HED Boundary.",
      route: "stable-diffusion-img2img",
      badge: "SD-2.1",
      img: "/home/imgtoimg.jpg",
    },
  ];
  