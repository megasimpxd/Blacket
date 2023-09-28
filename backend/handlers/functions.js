export default async () => {
    const functions = [];

    for (const file of walk("./functions")) {
        if (!file.endsWith(".js")) continue;

        const module = import(`../${file}`).then((module) => module.default);

        functions.push(module);
    }

    await Promise.all(functions);
}