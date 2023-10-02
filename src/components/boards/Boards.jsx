function Boards() {
  return (
    <main className="p-6">
      <div className="flex gap-6 items-start justify-start">
        <div className="w-72 ">
          <div className="board-title flex items-center gap-3">
            <i className="bg-red rounded-full w-4 h-4"></i>
            <h2 className="text-xs  tracking-widest text-mediumGrey font-bold">
              TODO (4)
            </h2>
          </div>
          <div className="board-list mt-6 flex flex-col gap-5">
            <div className="board bg-white rounded-lg shadow-md px-4 py-6">
              <h3 className="text-black text-base font-bold">
                Build UI for onboarding flow
              </h3>
              <span className="text-xs font-bold text-mediumGrey">
                0 of 3 subtasks
              </span>
            </div>
            <div className="board bg-white rounded-lg shadow-md px-4 py-6">
              <h3 className="text-black text-base font-bold">
                Build UI for onboarding flow
              </h3>
              <span className="text-xs font-bold text-mediumGrey">
                0 of 3 subtasks
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Boards;
