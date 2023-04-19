export const dummyModelCardData = [
    {
      title: "ControlNet-Openpose",
      discription:
        "This model corresponds to the ControlNet conditioned on Scribble images.",
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
        "This model corresponds to the ControlNet conditioned on Canny edges.",
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
      title: "ControlNet-HED",
      discription:
        "This model corresponds to the ControlNet conditioned on HED Boundary.",
      route: "jagilley-controlnet-hed",
      badge: "SD-1.4",
      img: "/home/image5.jpg",
      api:'https://api.segmind.com/v1/sd1.5-controlnet-hed',
      seed: '1543285487314',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'mangled ears',
      prompt: "ancient roman buildings, in a forest, 4k, extremely detailed",

      imageUrl:"/id/hed.jpeg"
    },
    {
      title: "ControlNet-Depth",
      discription:
        "This model corresponds to the ControlNet conditioned on Depth estimation.",
      route: "ControlNet-Depth",
      badge: "SD-2.0",
      img: "/home/image6.jpg",
      api:'https://api.segmind.com/v1/sd1.5-controlnet-depth',
      seed: '131487365682',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'mangled ears',
      prompt: "supercute saint bernard happy puppy, bokeh multicolor background, extremely detailed, sitting on a road",

      imageUrl:"/id/depth.jpg"
    },
    {
      title: "ControlNet Canny",
      discription:
        "This model corresponds to the ControlNet conditioned on HED Boundary.",
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
        "This model corresponds to the ControlNet conditioned on HED Boundary.",
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
        "This model corresponds to the ControlNet conditioned on HED Boundary.",
      route: "stable-diffusion-inpainting",
      badge: "SD-2.1",
      img: "/home/impainting.jpg",
      api:'http://140.238.249.123:5002/voltaml/volta_inpainting/sd-1.5-inpainting-dyn',
      seed: '17123564234',
      strength: "1",
      guidance_scale: "7.5",
      negative_prompt : 'NONE',
      maskUrl:"https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png",
      imageUrl:"https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
      mask:true
    },
    {
      title: "Stable-diffusion-2.1",
      discription:
        "This model corresponds to the ControlNet conditioned on HED Boundary.",
      route: "Stable-diffusion-2-1",
      badge: "SD-2.1",
      api:'https://api.segmind.com/v1/sd2.1-txt2img',
      prompt: "calico cat wearing a cosmonaut suit, 3d render, pixar style, 8k, high resolution",
      img: "/home/sd-2.jpeg",
      hide:true
    },
    {
      title: "Stable-diffusion-img2img",
      discription:
        "This model corresponds to the ControlNet conditioned on HED Boundary.",
      route: "stable-diffusion-img2img",
      badge: "SD-2.1",
      img: "/home/imgtoimg.jpg",
    },
  ];


  // http://140.238.249.123:5002/voltaml/volta_inpainting/sd-1.5-inpainting-dyn
// {
//     "prompt": "mecha robot sitting on a bench",
//     "negative_prompt": "bad anatomy, bad hands, missing fingers",
//     "samples": "1",
//     "scheduler": "DDIM",
//     "num_inference_steps": "20",
//     "guidance_scale": "7.5",
//     "seed": "113134799354",
//     "strength": "0.9",
//     "imageUrl":"https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
//     "maskUrl":"https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"
// }
