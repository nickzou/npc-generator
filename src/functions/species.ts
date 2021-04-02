import capitalize from 'capitalize';

const species = (species:any) => {
    if(species.length === 1) {
        return species[0];
    } else {
        return `mixed blood ${capitalize(species[0])}, ${capitalize(species[1])}`;
    }
};

export default species;