import CoinDetailsPage from "@/features/CoinDetails/CoinDetailsPage";

interface CoinDetailsRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({
  params,
}: CoinDetailsRouteProps) {
  const { id } = await params;

  return <CoinDetailsPage coinId={id} />;
}