module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/ace-step/ACE-Step app"
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "uv pip install gradio torch",
          "uv pip install -e ."
        ]
      }
    },
    // Edit this step with your custom install commands
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
          //  triton: true   // uncomment this line if your project requires triton
          // sageattention: true   // uncomment this line if your project requires sageattention
        }
      }
    }
  ]
}
