"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = void 0;
exports.assert = {
    should: {
        be: {
            truthy: function (anything, errorMessage) {
                if (!anything)
                    throw new Error(anything + " expected to be trurhy\n" + errorMessage);
            },
        },
        equal: function (value1, value2) {
            if (value1 !== value2)
                throw new Error("Assertion error:\nExpect values to be equal:\n" + value1 + "\n" + value2);
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3NlcnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsTUFBTSxHQUFHO0lBQ3BCLE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRTtZQUNGLE1BQU0sRUFBRSxVQUFDLFFBQWEsRUFBRSxZQUFxQjtnQkFDM0MsSUFBSSxDQUFDLFFBQVE7b0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBSSxRQUFRLGdDQUEyQixZQUFjLENBQUMsQ0FBQztZQUN2RixDQUFDO1NBQ0Y7UUFDRCxLQUFLLEVBQUUsVUFBQyxNQUFXLEVBQUUsTUFBVztZQUM5QixJQUFJLE1BQU0sS0FBSyxNQUFNO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsbURBQWlELE1BQU0sVUFBSyxNQUFRLENBQUMsQ0FBQztRQUMvRyxDQUFDO0tBQ0Y7Q0FDRixDQUFDIn0=