// @ts-nocheck
"use client";

import { useState } from "react";
import { InteractiveList } from "@/components/ui/interactive-list";
import { SelectorChips } from "@/components/ui/selector-chips";

const courseDurationOptions = [
  { label: "Short Course", icon: "⚡", value: "short" },
  { label: "Long Course", icon: "📚", value: "long" },
];

export function ResourcesFilter({ resources, filterOptions }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState(null);

  // Check if Courses is selected
  const isCoursesSelected = selectedCategories.includes("Courses");

  // Filter resources based on selected categories and duration
  const filtered = resources.filter((r) => {
    // Filter by category
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(r.category);

    // Filter by duration for courses
    const durationMatch =
      !isCoursesSelected ||
      !selectedDuration ||
      r.duration === selectedDuration;

    return categoryMatch && durationMatch;
  });

  // When category changes, reset duration filter
  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
    setSelectedDuration(null);
  };

  // Find the duration value from the selected label
  const handleDurationChange = (labels: string[]) => {
    if (!labels || labels.length === 0) {
      setSelectedDuration(null);
      return;
    }
    const selected = courseDurationOptions.find((opt) => opt.label === labels[0]);
    setSelectedDuration(selected?.value || null);
  };

  return (
    <>
      <div className="mb-4">
        <SelectorChips options={filterOptions} onChange={handleCategoryChange} />
      </div>
      {isCoursesSelected && (
        <div className="mb-4 flex items-center gap-3">
          <p className="text-sm text-muted-foreground">tag:</p>
          <SelectorChips
            options={courseDurationOptions}
            onChange={handleDurationChange}
          />
        </div>
      )}
      <InteractiveList items={filtered} />
    </>
  );
}
