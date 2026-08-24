import AuctionDetailsPage from "@/features/AuctionDetails/AuctionDetailsPage";

interface AuctionDetailsRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamicParams = true;
export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: AuctionDetailsRouteProps) {
  const { id } = await params;

  return (
    <AuctionDetailsPage auctionId={id} />
  );
}