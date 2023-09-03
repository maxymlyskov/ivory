import Exercise from "../components/Excercise";
import LoadingComponent from "../components/LoadingComponent";
import useExcercises from "../hooks/useExcercises";
import useSearchParams from "../hooks/useSearchParams";
import ErrorPage from "./ErrorPage";

const ExcercicsesPage = () => {
  const params = useSearchParams();

  const {
    data: excercises,
    isError,
    isLoading,
    refetch,
  } = useExcercises(params);

  if (isLoading) return <LoadingComponent />;

  if (isError || excercises?.length === 0)
    return <ErrorPage onRetry={refetch} />;

  return (
    <>
      {excercises?.map((excercise) => (
        <Exercise key={excercise.instructions} {...excercise} />
      ))}
    </>
  );
};

export default ExcercicsesPage;
