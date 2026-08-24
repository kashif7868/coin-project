import CollectionDetailsPage from "@/features/CollectionDetails/CollectionDetailsPage";

interface CollectionDetailsRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamicParams = true;
export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: CollectionDetailsRouteProps) {
  const { id } = await params;

  return (
    <CollectionDetailsPage
      collectionId={id}
    />
  );
}