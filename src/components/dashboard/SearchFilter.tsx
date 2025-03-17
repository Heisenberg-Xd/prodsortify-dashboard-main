
import React from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: any) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeFilters, setActiveFilters] = React.useState<string[]>([]);
  const [priceRange, setPriceRange] = React.useState([0, 1000]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };
  
  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      const newFilters = [...activeFilters, filter];
      setActiveFilters(newFilters);
      onFilterChange(newFilters);
    }
  };
  
  const removeFilter = (filter: string) => {
    const newFilters = activeFilters.filter(f => f !== filter);
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const clearAllFilters = () => {
    setActiveFilters([]);
    setPriceRange([0, 1000]);
    onFilterChange([]);
  };
  
  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            type="text"
            placeholder="Search products, segments, or attributes..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal size={18} />
              <span className="hidden sm:inline">Filters</span>
              {activeFilters.length > 0 && (
                <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                  {activeFilters.length}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Filters</h3>
              {activeFilters.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearAllFilters}
                  className="h-8 text-xs"
                >
                  Clear All
                </Button>
              )}
            </div>
            
            <Accordion type="multiple" defaultValue={["segment", "price"]}>
              <AccordionItem value="segment">
                <AccordionTrigger>Segment</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="segment-high" 
                        checked={activeFilters.includes('High Value')}
                        onCheckedChange={(checked) => 
                          checked ? addFilter('High Value') : removeFilter('High Value')
                        }
                      />
                      <label htmlFor="segment-high" className="text-sm cursor-pointer">
                        High Value
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="segment-mid" 
                        checked={activeFilters.includes('Mid Range')}
                        onCheckedChange={(checked) => 
                          checked ? addFilter('Mid Range') : removeFilter('Mid Range')
                        }
                      />
                      <label htmlFor="segment-mid" className="text-sm cursor-pointer">
                        Mid Range
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="segment-budget" 
                        checked={activeFilters.includes('Budget')}
                        onCheckedChange={(checked) => 
                          checked ? addFilter('Budget') : removeFilter('Budget')
                        }
                      />
                      <label htmlFor="segment-budget" className="text-sm cursor-pointer">
                        Budget
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="price">
                <AccordionTrigger>Price Range</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={[0, 1000]}
                      max={1000}
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">${priceRange[0]}</span>
                      <span className="text-sm">${priceRange[1]}</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="category">
                <AccordionTrigger>Product Category</AccordionTrigger>
                <AccordionContent>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                      <SelectItem value="food">Food & Beverage</SelectItem>
                    </SelectContent>
                  </Select>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <Button className="w-full mt-4">Apply Filters</Button>
          </PopoverContent>
        </Popover>
        
        <Button type="submit">Search</Button>
      </form>
      
      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {activeFilters.map(filter => (
            <Badge 
              key={filter} 
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1"
            >
              {filter}
              <X 
                size={14} 
                className="cursor-pointer" 
                onClick={() => removeFilter(filter)} 
              />
            </Badge>
          ))}
          
          {priceRange[0] > 0 || priceRange[1] < 1000 ? (
            <Badge 
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1"
            >
              ${priceRange[0]} - ${priceRange[1]}
              <X 
                size={14} 
                className="cursor-pointer" 
                onClick={() => setPriceRange([0, 1000])} 
              />
            </Badge>
          ) : null}
          
          {activeFilters.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearAllFilters}
              className="h-7 text-xs"
            >
              Clear All
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
