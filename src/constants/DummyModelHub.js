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
      negative_prompt : 'NONE',
      prompt: "astronaut running in spacesuit, colorful galaxy, stars, mystical dark sky",
      imageUrl:"/id/openpose.jpeg"
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
      negative_prompt : 'NONE',
      prompt: "steampunk underwater helmet, dark ocean background",
      imageUrl:"/id/scribble.jpeg"
      
    },
    {
      title: "Controlnet-hed",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on HED Boundary.",
      route: "jagilley-controlnet-hed",
      badge: "SD-1.4",
      img: "/home/image5.jpg",
      api:'https://api.segmind.com/v1/sd1.5-controlnet-hed',
      seed: '1543285487314',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'mangled ears',
      prompt: "supercute saint bernard happy puppy, bokeh multicolor background, extremely detailed, sitting on a road",
      imageUrl:"/id/hed.jpeg"
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
      negative_prompt : 'mangled ears',
      prompt: "ancient roman buildings, in a forest, 4k, extremely detailed",
      imageUrl:"/id/depth.jpg"
    },
    {
      title: "ControlNet Canny",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on HED Boundary.",
      route: "jagilley-controlnet-pose",
      badge: "SD-2.1",
      img: "/home/canny.jpeg",
      api:'https://api.segmind.com/v1/sd1.5-controlnet-canny',
      seed: '3131738736286',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'NONE',
      prompt: "a colorful bird, 4k",
      imageUrl:"/id/canny.jpg"
    },
    {
      title: "ControlNet MLSD",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on HED Boundary.",
      route: "ControlNet-MLSD",
      badge: "SD-1.5",
      img: "/home/msld-2.jpeg",
      api:'https://api.segmind.com/v1/sd1.5-controlnet-mlsd',
      seed: '1314873682',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'moon',
      prompt: "modern wooden house, night shot, realistic snow capped mountains, dense pine trees, starry sky, 4k, hyperrealistic, extremely detailed",
      imageUrl:"/id/mlsd.jpg"
    },
    {
      title: "Stable-diffusion-inpainting",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on HED Boundary.",
      route: "stable-diffusion-inpainting",
      badge: "SD-2.1",
      img: "/home/impainting.jpg",
      api:'https://api.segmind.com/v1/sd2.1-txt2img',
      seed: '17123564234',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'NONE',
      prompt: "calico cat wearing a cosmonaut suit, 3d render, pixar style, 8k, high resolution",
      // imageUrl:"https://img.freepik.com/free-photo/high-angle-male-training-trail_23-2148482738.jpg?w=740&t=st=1681310703~exp=1681311303~hmac=6dd9303d2b2a98086baa8819e3a3f5d37d7c2e2b8d48cbec72a6412c1c1581e3"
    },
    {
      title: "Stable-diffusion-2.1",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on HED Boundary.",
      route: "Stable-diffusion-2-1",
      badge: "SD-2.1",
      img: "/home/sd-2.jpeg",
    },
    {
      title: "Stable-diffusion-img2img",
      discription:
        "ControlNet is a neural network structure to control diffusion models by adding extra conditions. This checkpoint corresponds to the ControlNet conditioned on HED Boundary.",
      route: "stable-diffusion-img2img",
      badge: "SD-2.1",
      img: "/home/imgtoimg.jpg",
    },
  ];
  