export interface DataProps {
    id: number;
    title: string;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date | null;
}

export const data: DataProps[] = [
    {
        id: 1,
        title: "Finish reading the book",
        isCompleted: true,
        createdAt: new Date("2024-03-01T10:00:00"),
        updatedAt: new Date("2024-03-09T15:30:00")
    },
    {
        id: 2,
        title: "Buy groceries",
        isCompleted: false,
        createdAt: new Date("2024-03-08T09:00:00"),
        updatedAt: new Date("2024-03-08T09:00:00")
    },
    {
        id: 3,
        title: "Write a blog post",
        isCompleted: true,
        createdAt: new Date("2024-03-05T14:20:00"),
        updatedAt: new Date("2024-03-07T11:45:00")
    },
    {
        id: 4,
        title: "Clean the house",
        isCompleted: false,
        createdAt: new Date("2024-03-09T08:00:00"),
        updatedAt: new Date("2024-03-09T08:00:00")
    },
    {
        id: 5,
        title: "Work out",
        isCompleted: true,
        createdAt: new Date("2024-03-07T06:30:00"),
        updatedAt: new Date("2024-03-07T07:45:00")
    },
    {
        id: 6,
        title: "Call the bank",
        isCompleted: false,
        createdAt: new Date("2024-03-08T11:00:00"),
        updatedAt: new Date("2024-03-08T11:00:00")
    },
    {
        id: 7,
        title: "Fix the leaking faucet",
        isCompleted: true,
        createdAt: new Date("2024-03-04T16:20:00"),
        updatedAt: new Date("2024-03-06T10:15:00")
    },
    {
        id: 8,
        title: "Plan the trip itinerary",
        isCompleted: false,
        createdAt: new Date("2024-03-09T13:00:00"),
        updatedAt: new Date("2024-03-09T13:00:00")
    },
    {
        id: 9,
        title: "Attend the meeting",
        isCompleted: true,
        createdAt: new Date("2024-03-06T09:30:00"),
        updatedAt: new Date("2024-03-06T11:00:00")
    },
    {
        id: 10,
        title: "Finish the project report",
        isCompleted: false,
        createdAt: new Date("2024-03-07T14:00:00"),
        updatedAt: new Date("2024-03-07T14:00:00")
    },
    {
        id: 11,
        title: "Update the software",
        isCompleted: true,
        createdAt: new Date("2024-03-03T15:45:00"),
        updatedAt: new Date("2024-03-03T16:30:00")
    },
    {
        id: 12,
        title: "Visit the doctor",
        isCompleted: false,
        createdAt: new Date("2024-03-08T15:30:00"),
        updatedAt: new Date("2024-03-08T15:30:00")
    },
    {
        id: 13,
        title: "Organize the desk",
        isCompleted: true,
        createdAt: new Date("2024-03-02T10:20:00"),
        updatedAt: new Date("2024-03-02T11:45:00")
    },
    {
        id: 14,
        title: "Cook dinner",
        isCompleted: false,
        createdAt: new Date("2024-03-09T17:00:00"),
        updatedAt: new Date("2024-03-09T17:00:00")
    },
    {
        id: 15,
        title: "Reply to emails",
        isCompleted: true,
        createdAt: new Date("2024-03-05T09:15:00"),
        updatedAt: new Date("2024-03-05T10:30:00")
    },
    {
        id: 16,
        title: "Finish the presentation",
        isCompleted: false,
        createdAt: new Date("2024-03-08T13:45:00"),
        updatedAt: new Date("2024-03-08T13:45:00")
    },
    {
        id: 17,
        title: "Take the car for servicing",
        isCompleted: true,
        createdAt: new Date("2024-03-04T08:30:00"),
        updatedAt: new Date("2024-03-04T11:20:00")
    },
    {
        id: 18,
        title: "Pay the bills",
        isCompleted: false,
        createdAt: new Date("2024-03-07T16:00:00"),
        updatedAt: new Date("2024-03-07T16:00:00")
    },
    {
        id: 19,
        title: "Research for the article",
        isCompleted: true,
        createdAt: new Date("2024-03-03T13:20:00"),
        updatedAt: new Date("2024-03-03T15:45:00")
    },
    {
        id: 20,
        title: "Set up the new computer",
        isCompleted: false,
        createdAt: new Date("2024-03-09T09:30:00"),
        updatedAt: new Date("2024-03-09T09:30:00")
    }
];