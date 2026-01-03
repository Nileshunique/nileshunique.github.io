/* eslint-disable react/prop-types */
function Heading(props) {
  const { text, borderHeight } = props;
  return (
    <div className="flex">
      <div className={`border-b-2 border-yellow-400 ${borderHeight} w-full`} />
      <h2 className="text-4xl font-bold text-center mb-8 py-4 min-w-max mx-2">
        {text}
      </h2>
      <div className={`border-b-2 border-yellow-400 ${borderHeight} w-full`} />
    </div>
  );
}

export default Heading;
