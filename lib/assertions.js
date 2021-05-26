export var assert = {
    should: {
        be: {
            truthy: function (anything, errorMessage) {
                if (!anything)
                    throw new Error(anything + " expected to be trurhy\n" + errorMessage);
            }
        },
        equal: function (value1, value2) {
            if (value1 !== value2)
                throw new Error("Assertion error:\nExpect values to be equal:\n" + value1 + "\n" + value2);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3NlcnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRztJQUNwQixNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUU7WUFDRixNQUFNLEVBQUUsVUFBQyxRQUFhLEVBQUUsWUFBcUI7Z0JBQzNDLElBQUksQ0FBQyxRQUFRO29CQUFFLE1BQU0sSUFBSSxLQUFLLENBQUksUUFBUSxnQ0FBMkIsWUFBYyxDQUFDLENBQUM7WUFDdkYsQ0FBQztTQUNGO1FBQ0QsS0FBSyxFQUFFLFVBQUMsTUFBVyxFQUFFLE1BQVc7WUFDOUIsSUFBSSxNQUFNLEtBQUssTUFBTTtnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLG1EQUFpRCxNQUFNLFVBQUssTUFBUSxDQUFDLENBQUM7UUFDL0csQ0FBQztLQUNGO0NBQ0YsQ0FBQyJ9