import { API } from "@app/lib/axios";
import { Get_Quiz } from "@app/store/reducers/quiz";
import { useDispatch } from "react-redux";

export const useQuiz = () => {
  const dispatch = useDispatch();
  const hendelGetQuiz = async () => {
    try {
      const response = await API.get("/quizzes");
      console.log(response);
      dispatch(Get_Quiz({ data: response.data.data }));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    hendelGetQuiz,
  };
};
