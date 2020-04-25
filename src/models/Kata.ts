interface Kata {
    title: string
    description: string
}

export const defaultKata = { title: "Some Kata", description: "Here you're gonna find kata." }

const katas: Kata[] = [
    {
        title: "Secret Santa",
        description: "Write a function that receives a set of " +
            "strings representing the names of the Secret Santa participants " +
            "and returns a dictionary, hash map, object or equivalent where the " +
            "keys are participants and the values are the participant picked for that" +
            "participant.\n\n" +
            "Rules:\n" +
            "- Participants can only be picked by a single participant.\n" +
            "- Participants can not pick themselves.\n"
    }
]

export const getRandomKata = (): Kata => {
    return katas[Math.floor(Math.random() * katas.length)];
}

export default Kata
