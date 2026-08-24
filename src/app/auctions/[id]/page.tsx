import AuctionDetailsPage from "@/features/AuctionDetails/AuctionDetailsPage";

interface AuctionDetailsRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({
  params,
}: AuctionDetailsRouteProps) {
  const { id } = await params;

  return (
    <AuctionDetailsPage auctionId={id} />
  );
}