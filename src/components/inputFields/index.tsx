import { ChangeEvent, useState } from "react";
export const useFieldState = <T,>(data: T) => {
  const [state, setState] = useState<T>(data);
  const setInputValues = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev: T) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return { state, setInputValues };
};

type ChildrenProp = {
  children: JSX.Element[];
  heading: string;
};

interface InputBoxProp {
  handleOnchange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  type?: "text" | string;
}

export const SubmitButton = ({
  children,
  onSubmit,
  disable,
}: {
  children: string;
  disable: boolean;
  onSubmit: () => void;
}) => {
  return (
    <button
      onClick={() => !disable && onSubmit()}
      className="w-full click py-2 border flex justify-center items-center rounded-3xl bg-linear-to-r to-sky-400 from-pink-400 text-white capitalize"
    >
      {disable ? "loading..." : children}
    </button>
  );
};

export const InputBoxText = ({
  handleOnchange,
  name,
  placeholder,
  type,
}: InputBoxProp) => {
  return (
    <div className="flex flex-col w-full ">
      <span className="bg-white capitalize">{name}</span>

      <div className="relative bg-green0">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="p-2 mt-3 w-full border-b bg-transparent outline-hidden "
          onChange={handleOnchange}
        />
      </div>
    </div>
  );
};

const InputForm = ({ children, heading }: ChildrenProp) => {
  return (
    <div className="relative">
      <section className=" bg-white border w-[350px] min-h-[500px] p-5  flex  flex-wrap items-center shadow-md rounded-3xl relative ">
        <h1 className="text-3xl text-center w-full capitalize font-medium mb-10 ">
          {heading}{" "}
        </h1>
        <div className="w-full flex flex-col gap-7  ">{children}</div>
      </section>
    </div>
  );
};
export default InputForm;
