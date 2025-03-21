import { getNewById, getNewsList } from "@/api/request";
import { NewItem } from "@/api/types";
import { useEffect, useState } from "react"
import { Alert } from "react-native";

export const useDetailedNew = (id: number) => {
    const [item, setItem] = useState<NewItem | null>(null);
    const [loading, setLoading] = useState(true);

    const fetch = async () => {
        setItem(null)
        setLoading(true);
        const { data, error } = await getNewById({ id });
        if (error || !data) {
            Alert.alert('Ошибка соединения');
            setLoading(false)
            return;
        };

        setItem(data);
        setLoading(false);
    };

    useEffect(() => {
        fetch();
    }, [])

    return {
        item,
        loading, 
    }
}