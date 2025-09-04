import { useParams } from "@umijs/max"
import { useQuery } from "@tanstack/react-query"
import { getEvents } from "../services/events.api"

function useEvent() {
	const { id } = useParams()
	const { data, isLoading } = useQuery({ queryKey: ['getEvent', id], queryFn: async () => await getEvents({ eventId: id }) })
	return {
		event: data?.
			getAllEvents
			?.events[0],
		isLoading
	}
}

export default useEvent