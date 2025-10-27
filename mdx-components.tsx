import React, { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';
import {  MoveUpRight } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table"
import { table } from 'console';


type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="mt-7 scroll-m-20 text-4xl font-semibold tracking-tight text-balance" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className=" mt-7 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className=" mt-7 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-7" {...props} />,
  p: (props: ParagraphProps) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-[1.0rem] " {...props} />
  ),
  ol: (props: ListProps) => (
    <ol
      className="my-6 ml-6 list-decimal [&>li]:mt-2"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="my-6 ml-6 list-disc [&>li]:mt-2"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-bold" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      '';
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a  href={href}    {...props}>
          {children}
          
        </a>
      );
    }
    return (
      <a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className={`inline-flex items-center gap-1 text-primary hover:underline transition-colors ${className}`}
  {...props}
>
  {children}
  <MoveUpRight
    className=" w-3 h-3 align-super inline-block"
    aria-label="Opens in new tab"
  />
</a>

    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (

    <Table >
      <TableHeader>
        <TableRow>
          {data.headers.map((header, index) => (
            <TableHead key={index}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.rows.map((row, index) => (
          <TableRow key={index} >
            {row.map((cell, cellIndex) => (
              <TableCell  key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>

   
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="mt-7 border-l-2 pl-6 italic"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}