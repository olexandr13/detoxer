export const assert = {
    should: {
        be: {
            truthy: (anything, errorMessage) => {
                if (!anything)
                    throw new Error(`${anything} expected to be trurhy\n${errorMessage}`);
            },
        },
        equal: (value1, value2) => {
            if (value1 !== value2)
                throw new Error(`Assertion error:\nExpect values to be equal:\n${value1}\n${value2}`);
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3NlcnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRztJQUNwQixNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUU7WUFDRixNQUFNLEVBQUUsQ0FBQyxRQUFhLEVBQUUsWUFBcUIsRUFBRSxFQUFFO2dCQUMvQyxJQUFJLENBQUMsUUFBUTtvQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsUUFBUSwyQkFBMkIsWUFBWSxFQUFFLENBQUMsQ0FBQztZQUN2RixDQUFDO1NBQ0Y7UUFDRCxLQUFLLEVBQUUsQ0FBQyxNQUFXLEVBQUUsTUFBVyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxNQUFNLEtBQUssTUFBTTtnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxNQUFNLEtBQUssTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMvRyxDQUFDO0tBQ0Y7Q0FDRixDQUFDIn0=