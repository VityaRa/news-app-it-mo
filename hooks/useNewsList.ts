import { getNewsList } from "@/api/request";
import { NewItem } from "@/api/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react"
import { Alert } from "react-native";
import { useDebounce } from "./useDebounce";

const NEWS_LIST_CACHE_KEY = 'NEWS_LIST_CACHE_KEY';

export const useNewsList = () => {
    const [news, setNews] = useState<NewItem[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const fetch = async () => {
        setNews([]);
        setLoading(true);
        const { data, error } = await getNewsList({ title_contains: search });
        if (error || !data) {
            console.log({error, data});
            const storageData = await AsyncStorage.getItem(NEWS_LIST_CACHE_KEY);
            if (!storageData) {
                Alert.alert('Ошибка соединения');
                setLoading(false);
                return;
            };

            const cachedData = JSON.parse(storageData) as NewItem[];
            setNews(cachedData)
            setLoading(false);
            Alert.alert('Ошибка соединения - Данные взяты из кэша');
            return;
        };

        await AsyncStorage.setItem(NEWS_LIST_CACHE_KEY, JSON.stringify(data));
        setNews(data);
        setLoading(false);
    };
    const debounced = useDebounce(search, fetch, 500);

    useEffect(() => {
        fetch();
    }, [debounced]);

    return {
        items: news, 
        loading, 
        search, setSearch,
    }
}