import useAnnouncement from "../../Hooks/useAnnouncement";
import Container from "../../Shared/Container/Container";
import AnnouncementCard from "./AnnouncementCard";

const ShowAnnouncement = () => {
  const [announcement, isPending, refetch] = useAnnouncement();
  if (isPending) {
    return (
      <p className="text-center text-3xl font-medium flex justify-center items-center">
        Loading...
      </p>
    );
  }
  return (
    <>
      <Container>
        {announcement.length === 0 ? (
          <></>
        ) : (
          <>
            <div>
              <h3 className="mt-7 text-center font-semibold text-3xl">
                Announcement
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {announcement.map((ann) => (
                  <AnnouncementCard
                    key={ann._id}
                    refetch={refetch}
                    ann={ann}
                  ></AnnouncementCard>
                ))}
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default ShowAnnouncement;
