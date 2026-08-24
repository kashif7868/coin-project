import CollectionDetailsPage from "@/features/CollectionDetails/CollectionDetailsPage";

interface CollectionDetailsRouteProps {
  params: Promise<{
    id: string;
  }>;
}

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