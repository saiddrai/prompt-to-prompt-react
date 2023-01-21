import replicate


def getVersion():
    model = replicate.models.get("cjwbw/prompt-to-prompt")
    version = model.versions.get("77f9e56f3c0eb7e635d0197e192980173a48f414499ed07bbc80d5807bdb6191")



def getOriginalOutput(original_prompt):
    inputs = {'original_prompt': original_prompt,}

    original_output = version.predict(**inputs)
    print("Original output: ",original_output)
    return original_output

def getEditedOutput(original_prompt, edited_prompt, prompt_edit_type, cross_replace_steps, self_replace_steps, seed):
    inputs = {

    'original_prompt': original_prompt,


    'prompt_edit_type': prompt_edit_type,

    # Prompted used for editing the original sd output image. If
    # prompt_edit_type above is not set, then this field will be ignored.
    # See below for more information for how to edit the prompt from the
    # original prompt. For Re-weight, just provided words in
    # proginal_prompt with new weights.
    'edited_prompt':edited_prompt,

    # Enable local editing. Provide the in the format of
    # 'words_in_original_prompt | words_in_edited_prompt', and the rest
    # content will be preserved.
    # 'local_edit': ...,

    # Cross attention replace steps
    # Range: 0 to 1
    'cross_replace_steps': cross_replace_steps,

    # Self attention replace steps
    # Range: 0 to 1
    'self_replace_steps': self_replace_steps,

    # Random seed. Leave blank to randomize the seed for original output.
    # But make sure to use the same seed for original-updated
    # prompt pair.
    'seed':
    seed,
    }
    
    edited_output = version.predict(**inputs)
    print("Edited output: ",edited_output)
    return edited_output





