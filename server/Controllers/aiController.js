

export const enhanceProfessionalSummary = async(req,res) => {
    try {
      const {userContent} = req.body;
      if(!userContent){
        return res.status(400).json({message: "User content is required"});
      }
      const response = await openai.chat.completions.create({
          model: process.env.OPENAI_MODEL,
          messages: [
              { role: "system", content: "You are an expert in resume writing. Your task is to enhance the professional summary of a resume. The summary should be 1-2 sentences also highlighting key skills, experience, and career objectives. Make it compelling and ATS-friendly, and only return text no options or anything else." },
              {
                  role: "user",
                  content: userContent,
              },
          ],
      });
      const enhancedContent = response.choices[0].message.content;
      return res.status(200).json({enhancedContent});
    } catch (error) {
      res.status(500).json({message: "Internal server error"});
    }
}

export const enhanceJobDescription = async(req,res) => {
    try {
      const {userContent} = req.body;
      if(!userContent){
        return res.status(400).json({message: "User content is required"});
      }
      const response = await openai.chat.completions.create({
          model: process.env.OPENAI_MODEL,
          messages: [
              { role: "system", content: "You are an expert in resume writing. Your task is to enhance the job description of a resume. The job description should be only in 1-2 sentence also highlighting key responsibilities and achievements. Use action verbs and quantifiable results where possible. Make it ATS-friendly. and only return text no options or anything else." },
              {
                  role: "user",
                  content: userContent,
              },
          ],
      });
      const enhancedContent = response.choices[0].message.content;
      return res.status(200).json({enhancedContent});
    } catch (error) {
      res.status(500).json({message: "Internal server error"});
    }
}

export const uploadResume = async(req,res) => {
    try {
      const {resumeText,title} = req.body;
      if(!resumeText || !title){
        return res.status(400).json({message: "Resume text and title are required"});
      }
      const response = await openai.chat.completions.create({
          model: process.env.OPENAI_MODEL,
          messages: [
              { role: "system", content: "You are an expert in resume writing. Your task is to enhance the job description of a resume. The job description should be only in 1-2 sentence also highlighting key responsibilities and achievements. Use action verbs and quantifiable results where possible. Make it ATS-friendly. and only return text no options or anything else." },
              {
                  role: "user",
                  content: userContent,
              },
          ],
      });
      const enhancedContent = response.choices[0].message.content;
      return res.status(200).json({enhancedContent});
    } catch (error) {
      res.status(500).json({message: "Internal server error"});
    }
}