const Images = () => {
  return (
    <>
      <div className="grid grid-cols-9 gap-2 p-4 bg-gray-200">
        {[...Array(27)].map((_, i) => (
          <div
            key={i}
            className="h-24 bg-cover bg-center bg-gray-400"
            style={{
              backgroundImage: `url('https://picsum.photos/150?random=${i}')`, // Generates random images
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Images;
