import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

//creating & adding files
export const createFile = mutation({
  args: {
    name: v.string(),
  },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError("you must be logged into upload a file");
    }

    await ctx.db.insert("files", {
      name: args.name,
    });
  },
});

//get files
export const getFiles = query({
  args: {},
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      return [];
    }

    return ctx.db.query("files").collect();
  },
});
