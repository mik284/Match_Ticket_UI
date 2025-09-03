import { useParams } from "@umijs/max"
import { getAllVenues } from "../services/venues.api"
import { useQuery } from "@tanstack/react-query"

function useVenue() {
	const { id } = useParams()
	const { data, isLoading } = useQuery({ queryKey: ['getAllVenues', id], queryFn: async () => await getAllVenues({ venueId: id }) })
	return {
		venue: data?.getAllVenues?.venues[0],
		isLoading
	}
}

export default useVenue