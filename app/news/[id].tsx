import { DetailedNew } from "@/components/DetailedNew";
import { PageContent } from "@/components/PageContent";
import { useDetailedNew } from "@/hooks/useDetailedNew";
import { useLocalSearchParams } from "expo-router";

export default function DetailedNewScreen() {
  const { id } = useLocalSearchParams();
  const searchId = Array.isArray(id) ? id[0] : id;
  const { item, loading } = useDetailedNew(Number(searchId));
  return (
    <PageContent loading={loading}>
      {item && <DetailedNew item={item} />}
    </PageContent>
  );
}
