import { Loader } from "lucide-react";

const loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center ">
      <Loader className="animate-spin h-5 w-5 text-muted-foreground " />
    </div>
  );
};

export default loading;
