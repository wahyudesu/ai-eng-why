// Read directly from JSON files - now the source of truth
import personData from "@/data/person.json";
import resourcesData from "@/data/resources.json";
import jobsData from "@/data/jobs.json";
import toolkitData from "@/data/toolkit.json";

type PersonWithWebsite = {
  id: string;
  name: string;
  title: string;
  country: string;
  icon: string;
  sosmed?: string;
  website?: string;
};

export function parseReadme() {
  // Transform person data - person.json is already the source of truth
  const persons = personData.persons.map(
    (p: any): PersonWithWebsite => ({
      id: p.id,
      name: p.name,
      title: p.title,
      country: p.country,
      icon: p.icon,
      sosmed: p.sosmed,
      website: p.website,
    }),
  );

  return {
    personData: {
      title: personData.title,
      description: personData.description,
      persons,
    },
    resourcesData: resourcesData, // Direct from resources.json
    jobsData: jobsData, // Direct from jobs.json
    toolkitData: toolkitData, // Direct from toolkit.json
  };
}
