import DBListClass from "../../services/fakeListClass.json";
import dummyClassPicture from "../../images/background-images/dummyClassPicture.jpg";
import { useEffect, useState } from "react";

type TCard = {
  title: string;
  desc: string;
  mentorName: string;
  mentorJob: string;
  jobPlace: string;
  rating: number;
  voters: number;
  price: number;
  category: string;
};
export default function ListClass({ numberGrid }: { numberGrid: number }) {
  const lists = DBListClass;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function Card({
    title,
    desc,
    mentorName,
    mentorJob,
    jobPlace,
    rating,
    voters,
    price,
    category,
  }: TCard) {
    return (
      <div className="h-full bg-white rounded-[10px] p-4 md:p-5 gap-2 md:gap-4 flex flex-col justify-between">
        <div className="flex gap-3 md:flex-col h-full">
          <div
            className={`relative w-[82px] h-[82px] md:w-full md:h-[193px] overflow-hidden rounded-[10px] flex-shrink-0`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${dummyClassPicture})` }}
            ></div>
          </div>
          <div className={`flex gap-2 flex-col justify-center h-full`}>
            <h5 className="text-4 md:text-[18px] font-semibold">{title}</h5>
            {!isMobile && <p className="gray line-clamp-2 text-4">{desc}</p>}
            <div className="flex items-start gap-1">
              <img src="https://avatar.iran.liara.run/public" className="w-9" />
              <div>
                <h5 className="font-bold text-3 md:text-4">{mentorName}</h5>
                <p className="gray text-3 md:text-4">
                  {mentorJob} di{" "}
                  <span className="gray font-bold text-3 md:text-4">
                    {jobPlace}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <h5>start</h5>
          <h5 className="text-[#3ECF4C]">Rp {price}</h5>
        </div>
      </div>
    );
  }
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${numberGrid} gap-4`}>
      {lists.map((list) => (
        <Card
          title={list.title}
          desc={list.desc}
          mentorName={list.mentorName}
          mentorJob={list.mentorJob}
          jobPlace={list.jobPlace}
          rating={list.rating}
          voters={list.voters}
          price={list.price}
          category={list.category}
          key={list.title}
        />
      ))}
    </div>
  );
}
