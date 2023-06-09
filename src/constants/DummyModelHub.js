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
      imageUrl:"/id/openpose.jpeg",
      params : {
        "prompt": "astronaut running in spacesuit, colorful galaxy, stars, mystical dark sky",
        "negative_prompt": "NONE",
        "samples": "1",
        "scheduler": "UniPC",
        "num_inference_steps": "20",
        "guidance_scale": "7.5",
        "seed": "549767547333",
        "strength": "1",
        "imageUrl":"https://img.freepik.com/free-photo/high-angle-male-training-trail_23-2148482738.jpg?w=740&t=st=1681310703~exp=1681311303~hmac=6dd9303d2b2a98086baa8819e3a3f5d37d7c2e2b8d48cbec72a6412c1c1581e3"
    }
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
      imageUrl:"/id/scribble.jpeg",
      params: {
        "prompt": "steampunk underwater helmet, dark ocean background",
        "negative_prompt": "NONE",
        "samples": "1",
        "scheduler": "UniPC",
        "num_inference_steps": "40",
        "guidance_scale": "7.5",
        "seed": "85497675147333",
        "strength": "1",
        "imageUrl":"https://preview.redd.it/sfs210ar0dia1.jpg?width=512&format=pjpg&auto=webp&v=enabled&s=1889774c380c3caa09036952f5678c7250473ab9"
    }
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

      imageUrl:"/id/hed.jpeg",
      params: {
        "prompt": "supercute saint bernard happy puppy, bokeh multicolor background, extremely detailed, sitting on a road",
        "negative_prompt": "mangled ears",
        "samples": "1",
        "scheduler": "UniPC",
        "num_inference_steps": "40",
        "guidance_scale": "7.5",
        "seed": "1543285487314",
        "strength": "1",
        "imageUrl":"https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
        
    }
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

      imageUrl:"/id/depth.jpg",
      params: {
        "prompt": "ancient roman buildings, in a forest, 4k, extremely detailed",
        "negative_prompt": "mangled ears",
        "samples": "1",
        "scheduler": "UniPC",
        "num_inference_steps": "40",
        "guidance_scale": "7.5",
        "seed": "131487365682",
        "strength": "1",
        "imageUrl":"https://cdn.shopify.com/s/files/1/0020/6130/3926/products/Bloon_Toys-24May18-698_Extended.jpg?v=1570360864"
    }
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
      imageUrl:"/id/canny.jpg",
      params: {
        "prompt": "a colorful bird, 4k",
        "negative_prompt": "NONE",
        "samples": "1",
        "scheduler": "UniPC",
        "num_inference_steps": "40",
        "guidance_scale": "7.5",
        "seed": "3131738736286",
        "strength": "1",
        "imageUrl": "https://www.boredpanda.com/blog/wp-content/uploads/2020/05/B-z6qcUA82y-png__700.jpg"
    }
    
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
      imageUrl:"/id/mlsd.jpg",
      params: {
        "prompt": "modern wooden house, night shot, realistic snow capped mountains, dense pine trees, starry sky, 4k, hyperrealistic, extremely detailed",
        "negative_prompt": "moon",
        "samples": "1",
        "scheduler": "UniPC",
        "num_inference_steps": "40",
        "guidance_scale": "7.5",
        "seed": "1314873682",
        "strength": "1",
        "imageUrl":"https://media.istockphoto.com/id/165966770/vector/architecture.jpg?s=612x612&w=0&k=20&c=hNATWmHyJ4LYIKOVWeKr0gK7nivr6Dhvufe0qZ5xkjw="
    }
    
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
      mask:true,
      prompt: "mecha robot sitting on a bench"
    },
    {
      title: "Stable-diffusion-2.1",
      discription:
        "This model corresponds to the ControlNet conditioned on HED Boundary.",
      route: "Stable-diffusion-2-1",
      badge: "SD-2.1",
      api:'https://api.segmind.com/v1/sd2.1-txt2img',
      "prompt": "calico cat wearing a cosmonaut suit, 3d render, pixar style, 8k, high resolution",
    "negative_prompt": "NONE",
    "samples": "1",
    "scheduler": "DDIM",
    "num_inference_steps": "25",
    "guidance_scale": "7.5",
    "seed": "17123564234",
      img: "/home/sd-2.jpeg",
      hide:true,
      params: {
        "prompt": "calico cat wearing a cosmonaut suit, 3d render, pixar style, 8k, high resolution",
        "negative_prompt": "NONE",
        "samples": "1",
        "scheduler": "DDIM",
        "num_inference_steps": "25",
        "guidance_scale": "7.5",
        "seed": "17123564234"
    } 
    },
    {
      api: "https://api.segmind.com/v1/sd1.5-img2img",
      title: "Stable-diffusion-img2img",
      discription:
        "This model corresponds to the ControlNet conditioned on HED Boundary.",
      route: "stable-diffusion-img2img",
      badge: "SD-2.1",
      img: "/home/img2img-out.jpeg",
      imageUrl: "/home/sketch-mountains-input.jpeg",
      "prompt": "A fantasy landscape, trending on artstation, mystical sky",
    "negative_prompt": "NONE",
    "samples": "1",
    "scheduler": "DDIM",
    "num_inference_steps": "50",
    "guidance_scale": "10.5",
    "seed": "9887746562531",
    "strength": "0.75",
    params: {
      "prompt": "A fantasy landscape, trending on artstation, mystical sky",
      "negative_prompt": "NONE",
      "samples": "1",
      "scheduler": "DDIM",
      "num_inference_steps": "50",
      "guidance_scale": "10.5",
      "seed": "98877465625",
      "strength": "0.75",
      "imageUrl": "https://replicate.delivery/pbxt/HtKMvJSvuGWDn2B35mM396QGzcrgCNkcgSko8JxtXux4aX9H/sketch-mountains-input.jpeg"
  }
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
